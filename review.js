const fs = require("fs")
const path = require("path")


const BASE_DIRECTORY = './'
  + (process.argv[2] || '');


const registerAllJsFiles = function (dirPath, directoryObject, oldPath) {
  files = fs.readdirSync(dirPath)

  const thisFileName = __filename.split(__dirname).join('');
  const arrayOfFiles = [];
  const arrayOfDirs = [];
  for (let file of files) {
    if ('/' + file === thisFileName) continue;

    const isDirectory = fs.statSync(dirPath + "/" + file).isDirectory();
    if (!isDirectory && path.extname(file) !== '.js') continue;

    if (isDirectory) {
      if (file[0] === '.') continue; // ignore hidden folders
      const subDirs = registerAllJsFiles(dirPath + '/' + file, arrayOfDirs, dirPath);
      arrayOfDirs.push(subDirs);
    } else {
      arrayOfFiles.push(path.join(file))
    }
  }

  return {
    path: dirPath
      .split(oldPath).join('')
      .split('/').join('')
      + '/',
    files: arrayOfFiles.length > 0
      ? arrayOfFiles
      : null,
    dirs: arrayOfDirs.length > 0
      ? arrayOfDirs
      : null
  }
}

const allJsFiles = registerAllJsFiles(BASE_DIRECTORY);
console.log(JSON.stringify(allJsFiles, null, '  '));

/* statuses
  0: pass
  1: fail
  2: error
*/
const evaluateFile = (path) => {
  let report = [];
  const nativeAssert = console.assert;
  console.assert = function () {
    arguments = Array.from(arguments);
    nativeAssert(...arguments);
    report.push({
      assertion: arguments
    });
    if (!arguments[0]) {
      status = 1;
    }
  }
  let status = 0;
  try {
    require(path); // using require for callstack
    // const code = fs.readFileSync(path, 'utf-8');
    // eval(code);
  } catch (err) {
    report.push({
      error: err.stack
        .split(__dirname).join(' [...] ')
    });
    status = 2;
  }
  console.assert = nativeAssert;
  const source = fs.readFileSync(path, 'utf-8');

  return { path, status, source, report };
}

const evaluateDirectory = (toReport, path) => {
  path = path || toReport.path || './';

  const files = toReport.files
    ? toReport.files
      .map(fileName => evaluateFile(path + fileName))
    : toReport.files;

  const dirs = toReport.dirs
    ? toReport.dirs
      .map(dir => evaluateDirectory(dir, path + dir.path))
    : toReport.dirs;

  const statusOf = entries => entries
    ? entries
      .reduce((stat, entry) => entry.status > stat
        ? entry.status
        : stat,
        0)
    : -1;

  const dirsStatus = statusOf(dirs);
  const filesStatus = statusOf(files);

  const status = dirsStatus >= filesStatus
    ? dirsStatus
    : filesStatus;

  return {
    path,
    status,
    time: (new Date()).toJSON(),
    files,
    dirs,
  };
}


const evaluation = evaluateDirectory(allJsFiles);

// fs.writeFileSync('report.json', JSON.stringify(evaluation, null, '  '));
// console.log(JSON.stringify(evaluation, null, '  '));

const writeJsonReports = (report) => {

  if (report.dirs) {
    report.dirs
      .forEach(report => writeJsonReports(report));
  }

  fs.writeFile(
    report.path + 'report.json',
    JSON.stringify(report, null, '  '),
    (err) => { if (err) { console.log(err) } }
  );

};

writeJsonReports(evaluation);


const generateFileSection = (fileReport) => {

  const divider = '---';

  const relPath = fileReport.path.split('/').pop();
  const localHref = relPath
    .split('.js').join('');
  const header = `## [${localHref}](./${relPath})`;

  const encoded = encodeURIComponent(fileReport.source);
  const sanitized = encoded.replace(/\(/g, '%28').replace(/\)/g, '%29');
  const deTabbed = sanitized.replace(/%09/g, '%20%20');
  const jsTutorUrl = "http://www.pythontutor.com/live.html#code="
    + deTabbed
    + "&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";
  const jsTutorLink = `* [open in JS Tutor](${jsTutorUrl})`

  const source = '```js\n' + fileReport.source + '\n```';

  const renderedReport = fileReport.report
    .map(entry => {
      if (entry.error) {
        return 'x ' + entry.error;
      }
      if (entry.assertion) {
        const assertion = entry.assertion[0]
          ? '+ PASS: '
          : '- FAIL: ';
        const message = entry.assertion
          .slice(1)
          .toString();
        return assertion + message;
      }
    })
    .reduce((all, next) => all + next + '\n', '');

  const report = '```txt\n' + renderedReport + '```';

  return divider + '\n\n'
    + header + '\n\n'
    + jsTutorLink + '\n\n'
    + source + '\n\n'
    + report + '\n';
}

const generateReadmes = (report) => {

  if (report.dirs) {
    report.dirs
      .forEach(report => generateReadmes(report));
  }

  const now = new Date();
  const pathArr = report.path
    .split('/');
  const dirName = pathArr[pathArr.length - 2] + '/';
  const top = `# ${dirName} \n\n`
    + `> ${now.toDateString()}, ${now.toLocaleTimeString()}`;

  const interpret = status => status === 0
    ? 'pass'
    : status === 1
      ? 'fail'
      : status === 2
        ? 'error'
        : 'no status';

  const dirList = report.dirs
    ? report.dirs
      .map(dir => {
        const pathArr = report.path
          .split('/');
        const relPath = pathArr[pathArr.length - 2] + '/';
        return `* [${relPath}](#${relPath}) - ${interpret(dir.status)}`;
      })
      .reduce((list, li) => list + li + '\n', '')
    : '';

  const fileList = report.files
    ? report.files
      .map(file => { // what is the best way to manage this?
        const relPath = file.path.split('/').pop();
        const localHref = relPath.split('.js').join('');
        return `* [${relPath}](#${localHref}) - ${interpret(file.status)}`;
      })
      .reduce((list, li) => list + li + '\n', '')
    : '';

  const index = dirList + fileList;

  const fileSections = !report.files
    ? ''
    : report.files
      .map(fileReport => generateFileSection(fileReport))
      .reduce((body, section) => body + section + '\n', '');

  const newReadme = top + '\n\n'
    + index + '\n'
    + fileSections;

  fs.writeFile(
    report.path + 'README.md',
    newReadme,
    (err) => { if (err) { console.log(err) } }
  );

};

generateReadmes(evaluation);



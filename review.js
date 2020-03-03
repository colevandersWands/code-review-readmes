const fs = require("fs")
const path = require("path")

const BASE_DIRECTORY = process.argv[2] || './';

// --- build virtual directory of JS files ---

const registerDirectory = function (dirPath, oldPath) {
  paths = fs.readdirSync(dirPath)

  const thisFileName = __filename.split(__dirname).join('');
  const arrayOfFiles = [];
  const arrayOfDirs = [];
  for (let nextPath of paths) {
    if ('/' + nextPath === thisFileName) continue;

    const isDirectory = fs.statSync(dirPath + '/' + nextPath).isDirectory();
    if (!isDirectory && path.extname(nextPath) !== '.js') continue;

    if (isDirectory) {
      if (nextPath[0] === '.') continue; // ignore hidden folders
      const subDirs = registerDirectory(dirPath + '/' + nextPath, dirPath);
      arrayOfDirs.push(subDirs);
    } else {
      arrayOfFiles.push(path.join(nextPath))
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

const allJsFiles = registerDirectory(BASE_DIRECTORY);
// console.log(JSON.stringify(allJsFiles, null, '  '));


// --- generate report on all registered JS files ---

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
    require(path); // using require for cleaner callstack
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



// --- write reports into each subdirectory ---

const writeJsonReports = (report) => {

  if (report.dirs) {
    report.dirs
      .forEach(report => writeJsonReports(report));
  }

  fs.writeFile(
    report.path + 'report.json',
    JSON.stringify(report, null, ''),
    (err) => { if (err) { console.log(err) } }
  );

};

writeJsonReports(evaluation);


// --- write README's into each subdirectory ---

const interpret = status => status === 0
  ? 'pass'
  : status === 1
    ? 'fail'
    : status === 2
      ? 'error'
      : 'no status';

const generateFileSection = (fileReport) => {

  const divider = '---';

  const relPath = fileReport.path.split('/').pop();
  const localHref = relPath
    .split('.js').join('');
  const header = `## [${localHref}](./${relPath}) - ${interpret(fileReport.status)}`;

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


  const NOW = new Date();

  const dirName = path => {
    const pathArr = path
      .slice(0, path.length - 1)
      .split('/');
    return pathArr[pathArr.length - 1] + '/';
  }

  const top = `# ${dirName(report.path)} - ${interpret(report.status)}\n\n`
    + `> ${NOW.toDateString()}, ${NOW.toLocaleTimeString()}`;

  const dirList = report.dirs
    ? report.dirs
      .map(dir => {
        const relPath = dirName(dir.path);
        return `* [${relPath}](./${relPath}) - ${interpret(dir.status)}`;
      })
      .reduce((list, li) => list + li + '\n', '')
    : '';

  const fileList = report.files
    ? report.files
      .map(file => {
        const relPath = file.path.split('/').pop();
        const localHref = relPath.split('.js').join('');
        return `* [${relPath}](#${localHref}---${interpret(file.status)}) - ${interpret(file.status)}`;
      })
      .reduce((list, li) => list + li + '\n', '')
    : '';

  const index = dirList + fileList;

  const tableOfContents = index
    ? `### Exercises:\n\n` + index
    : '';

  const fileSections = !report.files
    ? ''
    : report.files
      .map(fileReport => generateFileSection(fileReport))
      .reduce((body, section) => body + section + '\n', '');

  const newReadme = top + '\n\n'
    + tableOfContents + '\n'
    + fileSections;

  fs.writeFile(
    report.path + 'README.md',
    newReadme,
    (err) => { if (err) { console.log(err) } }
  );

};

generateReadmes(evaluation);



const fs = require("fs")
const path = require("path")

const BASE_DIRECTORY = process.argv[2]
  ? ('./' + process.argv[2])
  : '.';

const getAllFiles = function (dirPath, objOfDirs, oldPath) {
  files = fs.readdirSync(dirPath)

  objOfDirs = {};
  var arrayOfFiles = [];
  for (let file of files) {
    if ('/' + file === __filename.split(__dirname).join('')) continue;
    if (file[0] === '.') continue;

    const isDirectory = fs.statSync(dirPath + "/" + file).isDirectory();
    if (!isDirectory && path.extname(file) !== '.js') continue;

    if (isDirectory) {
      arrayOfFiles.push(getAllFiles(dirPath + '/' + file, arrayOfFiles, dirPath))
    } else {
      arrayOfFiles.push(path.join(file))
    }
  }
  const dirNameKey = (dirPath.split(oldPath).join('') + '/').slice(1);
  objOfDirs[dirNameKey] = arrayOfFiles;
  return objOfDirs;
}

const allJsFiles = getAllFiles(BASE_DIRECTORY);
// console.log(JSON.stringify(allJsFiles, null, ' '));


const evaluateFile = (path) => {
  let report = [];
  const nativeAssert = console.assert;
  console.assert = function () {
    arguments = Array.from(arguments);
    nativeAssert(...arguments);
    report.push(arguments);
    if (!arguments[0]) {
      status = 'fail';
    }
  }
  let status = 'pass';
  try {
    require(path); // using require for callstack
    // const code = fs.readFileSync(path, 'utf-8');
    // eval(code);
  } catch (err) {
    report.push(err.stack
      .split(__dirname).join(' [...] ')
    );
    status = 'error';
  }
  console.assert = nativeAssert;
  return { report, status };
}

const evaluateDirectory = (toReport, path) => {
  path = path || './';
  if (typeof toReport === 'string') {
    const { report, status } = evaluateFile(path + toReport);
    const source = fs.readFileSync(path + toReport, 'utf-8');
    return { [toReport]: { report, status, source } };

  } else if (Array.isArray(toReport)) {
    return toReport.map(fileOrDir => evaluateDirectory(fileOrDir, path))

  } else { // assume it's an object
    // objects represent directories and so only have one key
    const key = Object.keys(toReport)[0];

    const evaluated = toReport[key]
      .map(fileOrDir => evaluateDirectory(fileOrDir, path + key));

    const statusOf = fileOrDir => {
      if (Array.isArray(fileOrDir)) {
        return fileOrDir
          .map(next => statusOf(next))
          .reduce((runningStat, nextStat) => {
            if (runningStat === 'error') return 'error';
            if (runningStat === 'fail') return 'fail';
            return nextStat;
          }, 'pass');
      } else if (fileOrDir.status) {
        return fileOrDir.status;
      } else {
        const key = Object.keys(fileOrDir)[0];
        return fileOrDir[key].status;
      }
    }

    const status = statusOf(evaluated);

    return {
      [key]: evaluated,
      status,
      timeStamp: (new Date()).toJSON()
    }
  }
}

// const evaluation = evaluateDirectory(allJsFiles[Object.keys(allJsFiles)[0]]);
const evaluation = evaluateDirectory(allJsFiles);

// fs.writeFileSync('report.json', JSON.stringify(evaluation, null, '  '));
// console.log(JSON.stringify(evaluation, null, '  '));

const generateJSONs = (evaluated, filePath) => {
  filePath = filePath || './';

  if (Array.isArray(evaluated)) {
    evaluated
      .forEach(fileOrDir => generateJSONs(fileOrDir, filePath))

  } else { // assume it's an object
    // objects represent directories or files and so only have one key
    const key = Object.keys(evaluated)[0];
    if (evaluated[key].status && evaluated[key].report) {

    } else {
      evaluated[key]
        .forEach(entry => generateJSONs(entry, filePath + key));

      fs.writeFileSync(filePath + key + 'report.json', JSON.stringify(evaluated, null, '  '));
    }
  }
}
generateJSONs(evaluation)

const generateREADMEs = (evaluated, filePath) => {
  filePath = filePath || './';

  if (Array.isArray(evaluated)) {
    return evaluated
      .map(fileOrDir => generateREADMEs(fileOrDir, filePath))
      .reduce((full, partial) => full + partial, '');

  } else { // assume it's an object
    // objects represent directories or files and so only have one key
    const key = Object.keys(evaluated)[0];
    // if (typeof evaluated[key] === 'string') {
    if (evaluated[key].status && evaluated[key].report) {
      const encoded = encodeURIComponent(evaluated[key].source);
      const sanitized = encoded.replace(/\(/g, '%28').replace(/\)/g, '%29');
      const deTabbed = sanitized.replace(/%09/g, '%20%20');
      const url = "http://www.pythontutor.com/live.html#code="
        + deTabbed
        + "&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";

      return '\n## [' + key.split('.js').join('') + '](./' + key + ')\n\n'
        + '* [open in JS Tutor](' + url + ')\n\n'
        + '```js\n' + evaluated[key].source + '```\n\n'
        + '```txt' + evaluated[key].report
          .map(entry => {
            if (typeof entry === 'string') {
              return '\nx ' + entry;
            }
            if (entry[0]) { // it's an assertion array
              return '\n+ PASS: ' + entry.slice(1).toString().split(',').join(', ');
            } else {
              return '\n- FAIL: ' + entry.slice(1).toString().split(',').join(', ');
            }
          })
          .join('')
        + '\n```\n';

    } else {
      const now = new Date();
      const index = [];
      const readmeBody = evaluated[key]
        .map(fileOrDir => {
          const pathText = Object.keys(fileOrDir)[0];
          if (path.extname(pathText) === '.js') {
            index.push('* [' + pathText + '](#' + pathText.split('.js').join('') + ') - ' + fileOrDir[pathText].status + '\n');
            return generateREADMEs(fileOrDir, filePath + key);
          } else {
            index.push('* [' + pathText + '](./' + pathText + ') - ' + fileOrDir.status + '\n');
            generateREADMEs(fileOrDir, filePath + key);
            return '';
          }
        })
        .reduce((full, partial) => full + partial, '');
      const newREADME = '# ' + key + '\n'
        + '\n> ' + now.toDateString() + ', ' + now.toLocaleTimeString() + '\n\n'
        + index.reduce((list, item) => list + item, '')
        + readmeBody;

      fs.writeFileSync(filePath + key + 'README.md', newREADME);
    }
  }
}

generateREADMEs(evaluation);
// generateREADMEs(evaluation[Object.keys(evaluation)[0]]);

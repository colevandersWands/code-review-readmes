const fs = require("fs")
const path = require("path")

const INDENTATION = '  ';

const BASE_DIRECTORY = process.argv[2]
  ? ('./' + process.argv[2])
  : '.';

const getAllFiles = function (dirPath, objOfDirs, oldPath) {
  files = fs.readdirSync(dirPath)

  objOfDirs = {};
  var arrayOfFiles = [];
  for (let file of files) {
    if ('/' + file === __filename.split(__dirname).join('')) continue;

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
  let report = '';
  const nativeAssert = console.assert;
  console.assert = function () {
    arguments = Array.from(arguments);
    nativeAssert(...arguments);
    report += arguments[0]
      ? '\n' + INDENTATION + '+ PASS: ' + arguments.slice(1)
      : '\n' + INDENTATION + '- FAIL: ' + arguments.slice(1);
  }
  try {
    require(path); // using require for callstack
    // const code = fs.readFileSync(path, 'utf-8');
    // eval(code);
  } catch (err) {
    report += '\n' + INDENTATION + err.stack
      .split(__dirname).join(' [...] ')
      .split('    ').join(INDENTATION + INDENTATION);
  }
  console.assert = nativeAssert;
  return report;
}

const evaluateDirectory = (toReport, path) => {
  path = path || '.';
  if (Array.isArray(toReport)) {
    return toReport.map(fileOrDir => evaluateDirectory(fileOrDir, path))

  } else if (typeof toReport === 'string') {
    const report = evaluateFile(path + toReport);
    return { [toReport]: report };

  } else { // assume it's an object
    // objects represent directories and so only have one key
    const key = Object.keys(toReport)[0];
    const evaluated = toReport[key]
      .map(fileOrDir => evaluateDirectory(fileOrDir, path + key));
    return { [key]: evaluated }
  }
}

const evaluation = evaluateDirectory(allJsFiles);
// console.log(JSON.stringify(evaluation, null, '  '));

const renderREADMEs = (evaluated, filePath) => {
  filePath = filePath || '';

  if (Array.isArray(evaluated)) {
    return evaluated
      .map(fileOrDir => renderREADMEs(fileOrDir, filePath))
      .reduce((full, partial) => full + partial, '');

  } else { // assume it's an object
    // objects represent directories or files and so only have one key
    const key = Object.keys(evaluated)[0];
    if (typeof evaluated[key] === 'string') {
      const source = fs.readFileSync(filePath + key, 'utf-8');
      const encoded = encodeURIComponent(source);
      const sanitized = encoded.replace(/\(/g, '%28').replace(/\)/g, '%29');
      const deTabbed = sanitized.replace(/%09/g, '%20%20');
      const url = "http://www.pythontutor.com/live.html#code="
        + deTabbed
        + "&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";

      return '\n## [' + key + '](./' + key + ')\n'
        + '[study in JS Tutor](' + url + ')\n'
        + '```' + evaluated[key].split('<').join('\<')
        + '\n```\n';

    } else {
      const newREADME = '\n# ' + key + '\n'
        + '\n> ' + (new Date()).toDateString() + '\n'
        + evaluated[key]
          .filter(fileOrDir => {
            if (path.extname(Object.keys(fileOrDir)[0]) === '.js') {
              return true;
            } else {
              renderREADMEs(fileOrDir, filePath + key);
              return false;
            }
          })
          .map(fileOrDir => renderREADMEs(fileOrDir, filePath + key))
          .reduce((full, partial) => full + partial, '');

      fs.writeFileSync(filePath + key + 'README.md', newREADME);
    }
  }
}
renderREADMEs(evaluation[Object.keys(evaluation)[0]]);

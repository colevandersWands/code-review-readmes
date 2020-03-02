
# reference-vs-value/

> Mon Mar 02 2020

## [comparing.js](./comparing.js)
[study in JS Tutor](http://www.pythontutor.com/live.html#code=%2F%2F%20comparing%20objects%20and%20arrays%20with%20%3D%3D%3D%20is%20based%20on%20reference%0A%2F%2F%20comparisons%20are%20true%20when%20they%20reference%20the%20same%20thing%20in%20memory%0A%2F%2F%20psst.%20JS%20Tutor%20will%20help%20a%20lot%20with%20this%20example%0A%0A%2F%2F%20examples%20with%20arrays%0A%0Aconst%20arrayOne%20%3D%20%5B'hi'%2C%20'bye'%5D%3B%0Aconst%20alsoArrayOne%20%3D%20arrayOne%3B%0Aconsole.assert%28alsoArrayOne%20%3D%3D%3D%20arrayOne%2C%20'alsoArrayOne%20%3D%3D%3D%20arrayOne'%29%3B%0Aconsole.assert%28alsoArrayOne%5B0%5D%20%3D%3D%3D%20arrayOne%5B0%5D%2C%20'alsoArrayOne%5B0%5D%20%3D%3D%3D%20arrayOne%5B0%5D'%29%3B%0Aconsole.assert%28alsoArrayOne%5B1%5D%20%3D%3D%3D%20arrayOne%5B1%5D%2C%20'alsoArrayOne%5B1%5D%20%3D%3D%3D%20arrayOne%5B1%5D'%29%3B%0A%0A%2F%2F%20two%20arrays%20with%20the%20same%20values%20do%20not%20compare%20to%20true%0Aconst%20arrayTwo%20%3D%20%5B'hi'%2C%20'bye'%5D%3B%0Aconsole.assert%28arrayTwo%20!%3D%3D%20arrayOne%2C%20'arrayTwo%20!%3D%3D%20arrayOne'%29%3B%0Aconsole.assert%28arrayTwo%5B0%5D%20%3D%3D%3D%20arrayOne%5B0%5D%2C%20'arrayTwo%5B0%5D%20%3D%3D%3D%20arrayOne%5B0%5D'%29%3B%0Aconsole.assert%28arrayTwo%5B1%5D%20%3D%3D%3D%20arrayOne%5B1%5D%2C%20'arrayTwo%5B1%5D%20%3D%3D%3D%20arrayOne%5B1%5D'%29%3B%0A%0AalsoArrayOne.push%28'mega'%29%3B%0Aconsole.assert%28arrayTwo%5B2%5D%20%3D%3D%3D%20undefined%2C%20'arrayTwo%20does%20not%20change%20when%20arrayOne%20does'%29%3B%0AarrayTwo.push%28'huh%3F'%29%3B%0Aconsole.assert%28arrayOne%5B2%5D%20%3D%3D%3D%20undefined%2C%20'arrayOne%20does%20not%20change%20when%20arrayTwo%20does'%29%3B%0A%0A%2F%2F%20examples%20with%20objects%0A%0Aconst%20objectOne%20%3D%20%7B%20first%3A%20'hi'%2C%20second%3A%20'bye'%20%7D%3B%0Aconst%20alsoObjectOne%20%3D%20objectOne%3B%0Aconsole.assert%28alsoObjectOne%20%3D%3D%3D%20objectOne%2C%20'alsoObjectOne%20%3D%3D%3D%20objectOne'%29%3B%0Aconsole.assert%28alsoObjectOne.first%20%3D%3D%3D%20objectOne.first%2C%20'alsoObjectOne.first%20%3D%3D%3D%20objectOne.first'%29%3B%0Aconsole.assert%28alsoObjectOne.second%20%3D%3D%3D%20objectOne.second%2C%20'alsoObjectOne.second%20%3D%3D%3D%20objectOne.second'%29%3B%0A%0A%0A%2F%2F%20two%20objects%20with%20the%20same%20values%20do%20not%20compare%20to%20true%0Aconst%20objectTwo%20%3D%20%7B%20first%3A%20'hi'%2C%20second%3A%20'bye'%20%7D%3B%0Aconsole.assert%28objectTwo%20!%3D%3D%20objectOne%2C%20'objectTwo%20!%3D%3D%20objectOne'%29%3B%0Aconsole.assert%28objectTwo.first%20%3D%3D%3D%20objectOne.first%2C%20'objectTwo.first%20%3D%3D%3D%20objectOne.first'%29%3B%0Aconsole.assert%28objectTwo.second%20%3D%3D%3D%20objectOne.second%2C%20'objectTwo.second%20%3D%3D%3D%20objectOne.second'%29%3B%0A%0A%0AalsoObjectOne.m%20%3D%20'ega'%3B%0Aconsole.assert%28alsoObjectTwo.m%20%3D%3D%3D%20undefined%2C%20'objectTwo%20does%20not%20change%20when%20objectOne%20does'%29%3B%0AobjectTwo.h%20%3D%20'uh%3F'%3B%0Aconsole.assert%28objectOne.h%20%3D%3D%3D%20undefined%2C%20'objectOne%20does%20not%20change%20when%20objectTwo%20does'%29%3B%0A&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)
```
  + PASS: alsoArrayOne === arrayOne
  + PASS: alsoArrayOne[0] === arrayOne[0]
  + PASS: alsoArrayOne[1] === arrayOne[1]
  + PASS: arrayTwo !== arrayOne
  + PASS: arrayTwo[0] === arrayOne[0]
  + PASS: arrayTwo[1] === arrayOne[1]
  + PASS: arrayTwo does not change when arrayOne does
  - FAIL: arrayOne does not change when arrayTwo does
  + PASS: alsoObjectOne === objectOne
  + PASS: alsoObjectOne.first === objectOne.first
  + PASS: alsoObjectOne.second === objectOne.second
  + PASS: objectTwo !== objectOne
  + PASS: objectTwo.first === objectOne.first
  + PASS: objectTwo.second === objectOne.second
  ReferenceError: alsoObjectTwo is not defined
    at Object.<anonymous> ( [...] /reference-vs-value/comparing.js:41:16)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluateFile ( [...] /build-READMEs.js:47:5)
    at evaluateDirectory ( [...] /build-READMEs.js:65:20)
    at  [...] /build-READMEs.js:72:25
```

## [const-reference-types.js](./const-reference-types.js)
[study in JS Tutor](http://www.pythontutor.com/live.html#code=%2F%2F%20using%20const%20with%20arrays%20and%20objects%20is%20like%20locking%20a%20bag%0A%2F%2F%20%20someone%20can't%20steal%20your%20bag%20because%20it's%20locked%20in%20place%0A%2F%2F%20%20but%20they%20can%20still%20take%20things%20out%20or%20put%20things%20in%0A%0Aconst%20constantObject%20%3D%20%7B%20a%3A%202%20%7D%3B%0AconstantObject.a%20%3D%203%3B%20%2F%2F%20no%20error%0AconstantObject.b%20%3D%204%3B%20%2F%2F%20no%20error%0AconstantObject%20%3D%20%7B%20a%3A%203%20%7D%3B%20%2F%2F%20error!%0A%0Aconst%20constantArray%20%3D%20%5B4%5D%3B%0AconstantArray%5B0%5D%20%3D%206%3B%20%2F%2F%20no%20error%0AconstantArray%5B1%5D%20%3D%207%3B%20%2F%2F%20no%20error%0AconstantArray%20%3D%20%5B6%5D%3B%20%2F%2F%20error!%0A&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)
```
  TypeError: Assignment to constant variable.
    at Object.<anonymous> ( [...] /reference-vs-value/const-reference-types.js:8:16)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluateFile ( [...] /build-READMEs.js:47:5)
    at evaluateDirectory ( [...] /build-READMEs.js:65:20)
    at  [...] /build-READMEs.js:72:25
```

## [sharing-a-reference.js](./sharing-a-reference.js)
[study in JS Tutor](http://www.pythontutor.com/live.html#code=%2F%2F%20primitives%20are%20stored%20%22by%20value%22%2C%20connected%20to%20one%20variable%0A%2F%2F%20%20assigning%20a%20primitive%20to%20a%20new%20variable%20makes%20a%20copy%20of%20it%0A%2F%2F%20%20modifying%20the%20new%20variable%20does%20not%20change%20the%20old%20one%0A%0Aconst%20number5%20%3D%205%3B%0Alet%20new5%20%3D%20number5%3B%0Anew5%20%3D%20new5%20%2B%201%3B%0Aconsole.assert%28new5%20%3D%3D%3D%206%2C%20'new5%20stores%20has%20been%20modified'%29%3B%0Aconsole.assert%28number5%20%3D%3D%3D%205%2C%20'original%20variable%20was%20not%20modified'%29%3B%0A%0A%0A%2F%2F%20objects%20%26%20arrays%20are%20stored%20by%20reference%0A%2F%2F%20%20both%20variables%20reference%20the%20same%20object%20in%20memory%0A%2F%2F%20%20modifying%20on%20variable%20changes%20both%0A%0Alet%20objectOne%20%3D%20%7B%7D%3B%0Aconst%20objectTwo%20%3D%20objectOne%3B%0AobjectTwo.x%20%3D%206%3B%0Aconsole.assert%28objectOne.x%20%3D%3D%3D%206%2C%20'objectOne%20has%20changed%20after%20modifying%20objectTwo'%29%3B%0AobjectOne.y%20%3D%20'hi!'%3B%0Aconsole.assert%28objectTwo.y%20%3D%3D%3D%20'hi!'%2C%20'objectTwo%20has%20changed%20after%20modifying%20objectOne'%29%3B%0AobjectOne%20%3D%20undefined%3B%0Aconsole.assert%28objectTwo%20!%3D%3D%20undefined%2C%20'reassigning%20objectOne%20does%20not%20affect%20objectTwo'%29%3B%0A%0Alet%20arrayOne%20%3D%20%5B%5D%3B%0Aconst%20arrayTwo%20%3D%20arrayOne%3B%0AarrayTwo%5B0%5D%20%3D%207%3B%0Aconsole.assert%28arrayOne%5B0%5D%20%3D%3D%3D%207%2C%20'arrayOne%20has%20changed%20after%20modifying%20arrayTwo'%29%3B%0AarrayOne%5B1%5D%20%3D%20'bye!'%3B%0Aconsole.assert%28arrayTwo%5B1%5D%20%3D%3D%3D%20'bye!'%2C%20'arrayTwo%20has%20changed%20after%20modifying%20arrayOne'%29%3B%0AarrayOne%20%3D%20undefined%3B%0Aconsole.assert%28arrayTwo%20!%3D%3D%20undefined%2C%20'reassigning%20arrayOne%20does%20not%20affect%20arrayTwo'%29%3B%0A%0A%0A&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)
```
  + PASS: new5 stores has been modified
  + PASS: original variable was not modified
  + PASS: objectOne has changed after modifying objectTwo
  + PASS: objectTwo has changed after modifying objectOne
  + PASS: reassigning objectOne does not affect objectTwo
  + PASS: arrayOne has changed after modifying arrayTwo
  + PASS: arrayTwo has changed after modifying arrayOne
  + PASS: reassigning arrayOne does not affect arrayTwo
```

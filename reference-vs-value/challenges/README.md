# challenges/ - error

> Tue Mar 03 2020, 1:30:42 PM

### Exercises:

* [array-1.js](#array-1---error) - error
* [array-2.js](#array-2---error) - error
* [object-1.js](#object-1---error) - error
* [object-2.js](#object-2---error) - error

---

## [array-1](./array-1.js) - error

* [open in JS Tutor](http://www.pythontutor.com/live.html#code=console.log%28'%5Cn---%20array%20challenge%3A%201%20---'%29%3B%0A%2F%2F%20psst.%20%20use%20JS%20Tutor%20%26%20the%20debugger!%0A%0A%0A%3B%20%2F%2F%20declare%20and%20assign%20array1%0A%3B%20%2F%2F%20declare%20and%20assign%20array2%0A%0Aconst%20areTheSameArray%20%3D%20array1%20%3D%3D%3D%20array2%3B%0Aconst%20sameZeroValue%20%3D%20array1%5B0%5D%20%3D%3D%3D%20array2%5B0%5D%3B%0Aconst%20zeroValueIsHi%20%3D%20array1%5B0%5D%20%3D%3D%3D%20'hi'%3B%0Aconsole.assert%28areTheSameArray%20%26%26%20sameZeroValue%20%26%26%20zeroValueIsHi%2C%20'Test%201'%29%3B%0A%0A%0A%0Aconst%20index%20%3D%201%3B%0A%2F%2F%20pass%20the%20next%20test%0A%0A%0Aconst%20arraysIndexAreSame%20%3D%20array1%5Bindex%5D%20%3D%3D%3D%20array2%5Bindex%5D%3B%0Aconst%20array1IndexIsBye%20%3D%20array1%5Bindex%5D%20%3D%3D%3D%20'bye'%3B%0Aconsole.assert%28arraysIndexAreSame%20%26%26%20array1IndexIsBye%2C%20'Test%202'%29%3B%0A&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)

```js
console.log('\n--- array challenge: 1 ---');
// psst.  use JS Tutor & the debugger!


; // declare and assign array1
; // declare and assign array2

const areTheSameArray = array1 === array2;
const sameZeroValue = array1[0] === array2[0];
const zeroValueIsHi = array1[0] === 'hi';
console.assert(areTheSameArray && sameZeroValue && zeroValueIsHi, 'Test 1');



const index = 1;
// pass the next test


const arraysIndexAreSame = array1[index] === array2[index];
const array1IndexIsBye = array1[index] === 'bye';
console.assert(arraysIndexAreSame && array1IndexIsBye, 'Test 2');

```

```txt
x ReferenceError: array1 is not defined
    at Object.<anonymous> ( [...] /reference-vs-value/challenges/array-1.js:8:25)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluateFile ( [...] /review.js:69:5)
    at  [...] /review.js:90:24
    at Array.map (<anonymous>)
```

---

## [array-2](./array-2.js) - error

* [open in JS Tutor](http://www.pythontutor.com/live.html#code=console.log%28'%5Cn---%20array%20challenges%3A%202%20---'%29%3B%0A%2F%2F%20psst.%20%20use%20JS%20Tutor%20%26%20the%20debugger!%0A%0A%0A%3B%20%2F%2F%20declare%20and%20assign%20array1%0A%3B%20%2F%2F%20declare%20and%20assign%20array2%0A%0Aconst%20areDifferentArrays%20%3D%20array1%20!%3D%3D%20array2%3B%0Aconst%20sameZeroValue%20%3D%20array1%5B0%5D%20%3D%3D%3D%20array2%5B0%5D%3B%0Aconst%20zeroValueIsHi%20%3D%20array1%5B0%5D%20%3D%3D%3D%20'hi'%3B%0Aconsole.assert%28areDifferentArrays%20%26%26%20sameZeroValue%20%26%26%20zeroValueIsHi%2C%20'Test%201'%29%3B%0A%0Aconst%20index%20%3D%201%3B%0A%2F%2F%20pass%20the%20last%20two%20asserts%0A%0Aconst%20arraysIndexAreSame%20%3D%20array1%5Bindex%5D%20%3D%3D%3D%20array2%5Bindex%5D%3B%0Aconst%20array1IndexIsBye%20%3D%20array1%5Bindex%5D%20%3D%3D%3D%20'bye'%3B%0Aconsole.assert%28arraysIndexAreSame%20%26%26%20array1IndexIsBye%2C%20'Test%202'%29%3B%0A&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)

```js
console.log('\n--- array challenges: 2 ---');
// psst.  use JS Tutor & the debugger!


; // declare and assign array1
; // declare and assign array2

const areDifferentArrays = array1 !== array2;
const sameZeroValue = array1[0] === array2[0];
const zeroValueIsHi = array1[0] === 'hi';
console.assert(areDifferentArrays && sameZeroValue && zeroValueIsHi, 'Test 1');

const index = 1;
// pass the last two asserts

const arraysIndexAreSame = array1[index] === array2[index];
const array1IndexIsBye = array1[index] === 'bye';
console.assert(arraysIndexAreSame && array1IndexIsBye, 'Test 2');

```

```txt
x ReferenceError: array1 is not defined
    at Object.<anonymous> ( [...] /reference-vs-value/challenges/array-2.js:8:28)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluateFile ( [...] /review.js:69:5)
    at  [...] /review.js:90:24
    at Array.map (<anonymous>)
```

---

## [object-1](./object-1.js) - error

* [open in JS Tutor](http://www.pythontutor.com/live.html#code=console.log%28'%5Cn---%20object%20challenges%3A%201%20---'%29%3B%0A%2F%2F%20psst.%20%20use%20JS%20Tutor%20%26%20the%20debugger!%0A%0A%0A%3B%20%2F%2F%20declare%20and%20assign%20object1%0A%3B%20%2F%2F%20declare%20and%20assign%20object2%0A%0Aconst%20areTheSameObject%20%3D%20object1%20%3D%3D%3D%20object2%3B%0Aconst%20sameXValue%20%3D%20object1.x%20%3D%3D%3D%20object2.x%3B%0Aconst%20xValueIsHi%20%3D%20object1.x%20%3D%3D%3D%20'hi'%3B%0Aconsole.assert%28areTheSameObject%20%26%26%20sameXValue%20%26%26%20xValueIsHi%2C%20'Test%201'%29%3B%0A%0A%0Aconst%20key%20%3D%20'y'%3B%0A%2F%2F%20pass%20the%20next%20tests%0A%0Aconst%20objectsKeyAreSame%20%3D%20object1%5Bkey%5D%20%3D%3D%3D%20object2%5Bkey%5D%3B%0Aconst%20object1YIsBye%20%3D%20object1.y%20%3D%3D%3D%20'bye'%3B%0Aconsole.assert%28objectsKeyAreSame%20%26%26%20objectsKeyAreSame%2C%20'Test%202'%29%3B%0A&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)

```js
console.log('\n--- object challenges: 1 ---');
// psst.  use JS Tutor & the debugger!


; // declare and assign object1
; // declare and assign object2

const areTheSameObject = object1 === object2;
const sameXValue = object1.x === object2.x;
const xValueIsHi = object1.x === 'hi';
console.assert(areTheSameObject && sameXValue && xValueIsHi, 'Test 1');


const key = 'y';
// pass the next tests

const objectsKeyAreSame = object1[key] === object2[key];
const object1YIsBye = object1.y === 'bye';
console.assert(objectsKeyAreSame && objectsKeyAreSame, 'Test 2');

```

```txt
x ReferenceError: object1 is not defined
    at Object.<anonymous> ( [...] /reference-vs-value/challenges/object-1.js:8:26)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluateFile ( [...] /review.js:69:5)
    at  [...] /review.js:90:24
    at Array.map (<anonymous>)
```

---

## [object-2](./object-2.js) - error

* [open in JS Tutor](http://www.pythontutor.com/live.html#code=console.log%28'%5Cn---%20object%20challenges%3A%202%20---'%29%3B%0A%2F%2F%20psst.%20%20use%20JS%20Tutor%20%26%20the%20debugger!%0A%0A%0A%3B%20%2F%2F%20declare%20and%20assign%20object1%0A%3B%20%2F%2F%20declare%20and%20assign%20object2%0A%0Aconst%20areNotTheSameObject%20%3D%20object1%20!%3D%3D%20object2%3B%0Aconst%20sameXValue%20%3D%20object1.x%20%3D%3D%3D%20object2.x%3B%0Aconst%20xValueIsHi%20%3D%20object1.x%20%3D%3D%3D%20'hi'%3B%0Aconsole.assert%28areNotTheSameObject%20%26%26%20sameXValue%20%26%26%20xValueIsHi%2C%20'Test%201'%29%3B%0A%0A%0Aconst%20key%20%3D%20'y'%3B%0A%2F%2F%20pass%20the%20next%20tests%0A%0Aconst%20objectsKeyAreSame%20%3D%20object1%5Bkey%5D%20%3D%3D%3D%20object2%5Bkey%5D%3B%0Aconst%20object1YIsBye%20%3D%20object1.y%20%3D%3D%3D%20'bye'%3B%0Aconsole.assert%28objectsKeyAreSame%20%26%26%20object1YIsBye%2C%20'Test%202'%29%3B%0A&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)

```js
console.log('\n--- object challenges: 2 ---');
// psst.  use JS Tutor & the debugger!


; // declare and assign object1
; // declare and assign object2

const areNotTheSameObject = object1 !== object2;
const sameXValue = object1.x === object2.x;
const xValueIsHi = object1.x === 'hi';
console.assert(areNotTheSameObject && sameXValue && xValueIsHi, 'Test 1');


const key = 'y';
// pass the next tests

const objectsKeyAreSame = object1[key] === object2[key];
const object1YIsBye = object1.y === 'bye';
console.assert(objectsKeyAreSame && object1YIsBye, 'Test 2');

```

```txt
x ReferenceError: object1 is not defined
    at Object.<anonymous> ( [...] /reference-vs-value/challenges/object-2.js:8:29)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluateFile ( [...] /review.js:69:5)
    at  [...] /review.js:90:24
    at Array.map (<anonymous>)
```


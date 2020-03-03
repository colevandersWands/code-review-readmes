# challenges/ - error

> Tue Mar 03 2020, 11:04:34 PM

### Exercises:

* [array-1.js](#array-1js---error) - error
* [array-2.js](#array-2js---error) - error
* [object-1.js](#object-1js---error) - error
* [object-2.js](#object-2js---error) - error
* [../README.md](../README.md)

---

## [array-1.js](./array-1.js) - error

```txt
x ReferenceError: array1 is not defined
    at Object.<anonymous> ( [...] /reference-vs-value/challenges/array-1.js:8:25)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluateFile ( [...] /review.js:70:5)
    at  [...] /review.js:96:24
    at Array.map (<anonymous>)
```

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

[TOP](#exercises)

---

## [array-2.js](./array-2.js) - error

```txt
x ReferenceError: array1 is not defined
    at Object.<anonymous> ( [...] /reference-vs-value/challenges/array-2.js:8:28)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluateFile ( [...] /review.js:70:5)
    at  [...] /review.js:96:24
    at Array.map (<anonymous>)
```

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

[TOP](#exercises)

---

## [object-1.js](./object-1.js) - error

```txt
x ReferenceError: object1 is not defined
    at Object.<anonymous> ( [...] /reference-vs-value/challenges/object-1.js:8:26)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluateFile ( [...] /review.js:70:5)
    at  [...] /review.js:96:24
    at Array.map (<anonymous>)
```

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

[TOP](#exercises)

---

## [object-2.js](./object-2.js) - error

```txt
x ReferenceError: object1 is not defined
    at Object.<anonymous> ( [...] /reference-vs-value/challenges/object-2.js:8:29)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluateFile ( [...] /review.js:70:5)
    at  [...] /review.js:96:24
    at Array.map (<anonymous>)
```

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

[TOP](#exercises)


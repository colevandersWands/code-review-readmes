# side-effects/ - syntaxError

<div id='top'></div>

> Tue Mar 03 2020, 11:11:14 PM

### Exercises:

* [avoiding-side-effects.js](#avoiding-side-effectsjs---syntaxError) - syntaxError
* [challenges.js](#challengesjs---fail) - fail
* [copying-arrays-and-objects.js](#copying-arrays-and-objectsjs---pass) - pass
* [what-are-they.js](#what-are-theyjs---pass) - pass
* [../README.md](../README.md)

---

## [avoiding-side-effects.js](./avoiding-side-effects.js) - syntaxError

```txt
 [...] /side-effects/avoiding-side-effects.js:9
function arraySideEffectarr, index, value) {
                           ^

SyntaxError: Unexpected token ,
    at Module._compile (internal/modules/cjs/loader.js:720:22)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluateFile ( [...] /review.js:70:5)
    at  [...] /review.js:96:24
    at Array.map (<anonymous>)
    at evaluateDirectory ( [...] /review.js:96:8)
```

```js
// the best way to avoid side-effects is to copy arguments
//  if your function takes an object or array as a parameter
//  create a copy at the beginning of your function and use the copy
// psst. JS Tutor is helpful for this example


console.log('\n--- avoiding side effects: arrays ---');

function arraySideEffectarr, index, value) {
  const copiedArr = JSON.parse(JSON.stringify(arr));
  copiedArr[index] = value;
  return copiedArr;
}

const globalArray = [1, 2, 3];
const updatedArray = arraySideEffect(globalArray, 0, 'hi!');

console.assert(updatedArray[0] === 'hi!', 'the returned array is updated ...');
console.assert(globalArray[0] === 1, '... but the global array has not changed ...');
console.assert(globalArray !== updatedArray, "... because you avoided side-effects!");


console.log('--- avoiding side effects: objects ---');

function objectSideEffect(obj, key, value) {
  const copiedObj = JSON.parse(JSON.stringify(obj));
  copiedObj[key] = value;
  return copiedObj;
}

const globalObject = { a: 1, b: 2, c: 3 };
const updatedObject = objectSideEffect(globalObject, 'a', 'hi!');

console.assert(updatedObject.a === 'hi!', 'the returned object is updated ...');
console.assert(globalObject.a === 1, '... but so is the global object ...');
console.assert(globalObject !== updatedObject, "... because they're the same thing!");

```

[TOP](#top)

---

## [challenges.js](./challenges.js) - fail

```txt
- FAIL: array: first
+ PASS: array: second
+ PASS: array: third
- FAIL: array: fourth
- FAIL: array: fifth
- FAIL: object: first
+ PASS: object: second
+ PASS: object: third
- FAIL: object: fourth
- FAIL: object: fifth
```

```js
// modify these functions so to avoid side-effects

console.log('\n-- side effects: first challenge --');

function addOneToEach(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 1;
  }
  return arr;
}

const initialArray = [1, 2];
const addedArray = addOneToEach(initialArray);
console.assert(initialArray !== addedArray, 'array: first');
console.assert(addedArray[0] === 2, 'array: second');
console.assert(addedArray[1] === 3, 'array: third');
console.assert(initialArray[0] === 1, 'array: fourth');
console.assert(initialArray[1] === 2, 'array: fifth');


console.log('-- side effects: second challenge --');

function setValueToKey(obj) {
  for (let key in obj) {
    obj[key] = key;
  }
  return obj;
}

const initialObject = { a: 1, b: 2 };
const keyKeyObject = setValueToKey(initialObject);
console.assert(initialObject !== keyKeyObject, 'object: first');
console.assert(keyKeyObject.a === 'a', 'object: second');
console.assert(keyKeyObject.b === 'b', 'object: third');
console.assert(initialObject.a === 1, 'object: fourth');
console.assert(initialObject.b === 2, 'object: fifth');

```

[TOP](#top)

---

## [copying-arrays-and-objects.js](./copying-arrays-and-objects.js) - pass

```txt
+ PASS: arrayStringified
+ PASS: parsedArray[0] === array[0]
+ PASS: parsedArray[1] === array[1]
+ PASS: parsedArray !== array
+ PASS: copiedArray[0] === array[0]
+ PASS: copiedArray[1] === array[1]
+ PASS: copiedArray !== array
+ PASS: objectStringified
+ PASS: parsedObject.a === object.a
+ PASS: parsedObject.b === object.b
+ PASS: parsedObject !== object
+ PASS: copiedObject[0] === object[0]
+ PASS: copiedObject[1] === object[1]
+ PASS: copiedObject !== object
```

```js
// there are many ways to copy arrays & objects in javascript
//  for now you will learn JSON.parse(JSON.stringify(thing))
//  it's simplest to understand and works well

// JSON.stringify converts objects and arrays into strings
// JSON.parse turns the strings into a new array or object


console.log('\n-- JSON.parse(JSON.stringify(array)) --');

// create a string version of the array
const array = [true, 'hi'];
const arrayStringified = JSON.stringify(array);
console.assert(arrayStringified === '[true,"hi"]', 'arrayStringified');

// create a new array based on the string version
const parsedArray = JSON.parse(arrayStringified);
console.assert(parsedArray[0] === array[0], 'parsedArray[0] === array[0]');
console.assert(parsedArray[1] === array[1], 'parsedArray[1] === array[1]');

// and the new array is a true copy of the original
console.assert(parsedArray !== array, 'parsedArray !== array');

// or do it all in one step:
const copiedArray = JSON.parse(JSON.stringify(array));
console.assert(copiedArray[0] === array[0], 'copiedArray[0] === array[0]');
console.assert(copiedArray[1] === array[1], 'copiedArray[1] === array[1]');
console.assert(copiedArray !== array, 'copiedArray !== array');



console.log('-- JSON.parse(JSON.stringify(object)) --');

// create a string version of the object
const object = { a: true, b: 'hi' };
const objectStringified = JSON.stringify(object);
console.assert(objectStringified === '{"a":true,"b":"hi"}', 'objectStringified');

// create a new object based on the string version
const parsedObject = JSON.parse(objectStringified);
console.assert(parsedObject.a === object.a, 'parsedObject.a === object.a');
console.assert(parsedObject.b === object.b, 'parsedObject.b === object.b');

// and the new object is true copy of the original
console.assert(parsedObject !== object, 'parsedObject !== object');

// or do it all in one step:
const copiedObject = JSON.parse(JSON.stringify(object));
console.assert(copiedObject[0] === object[0], 'copiedObject[0] === object[0]');
console.assert(copiedObject[1] === object[1], 'copiedObject[1] === object[1]');
console.assert(copiedObject !== object, 'copiedObject !== object');





```

[TOP](#top)

---

## [what-are-they.js](./what-are-they.js) - pass

```txt
+ PASS: the returned array is updated ...
+ PASS: ... but so is the global array ...
+ PASS: ... because they're the same thing!
+ PASS: the returned object is updated ...
+ PASS: ... but so is the global object ...
+ PASS: ... because they're the same thing!
```

```js
// arrays and objects arguments are passed by reference
//  this means a function is modifying the global data structure
// side-effects happen when:
//  calling a function directly changes a global value
// psst. JS Tutor is very helpful for these examples

console.log('\n--- side effects: arrays ---');

function arraySideEffect(arr, index, value) {
  arr[index] = value;
  return arr;
}

const globalArray = [1, 2, 3];
const updatedArray = arraySideEffect(globalArray, 0, 'hi!');

console.assert(updatedArray[0] === 'hi!', 'the returned array is updated ...');
console.assert(globalArray[0] === 'hi!', '... but so is the global array ...');
console.assert(globalArray === updatedArray, "... because they're the same thing!");


console.log('--- side effects: objects ---');

function objectSideEffect(obj, key, value) {
  obj[key] = value;
  return obj;
}

const globalObject = { a: 1, b: 2, c: 3 };
const updatedObject = objectSideEffect(globalObject, 'a', 'hi!');

console.assert(updatedObject.a === 'hi!', 'the returned object is updated ...');
console.assert(globalObject.a === 'hi!', '... but so is the global object ...');
console.assert(globalObject === updatedObject, "... because they're the same thing!");

```

[TOP](#top)


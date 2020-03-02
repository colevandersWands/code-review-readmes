
# side-effects/

> Mon Mar 02 2020, 4:02:06 PM
* [avoiding-side-effects.js](#avoiding-side-effects.js) - pass
* [challenges.js](#challenges.js) - fail
* [copying-arrays-and-objects.js](#copying-arrays-and-objects.js) - pass
* [what-are-they.js](#what-are-they.js) - pass

## [avoiding-side-effects.js](./avoiding-side-effects.js)
* [open in JS Tutor](http://www.pythontutor.com/live.html#code=%2F%2F%20the%20best%20way%20to%20avoid%20side-effects%20is%20to%20copy%20arguments%0A%2F%2F%20%20if%20your%20function%20takes%20an%20object%20or%20array%20as%20a%20parameter%0A%2F%2F%20%20create%20a%20copy%20at%20the%20beginning%20of%20your%20function%20and%20use%20the%20copy%0A%2F%2F%20psst.%20JS%20Tutor%20is%20helpful%20for%20this%20example%0A%0A%0Aconsole.log%28'%5Cn---%20avoiding%20side%20effects%3A%20arrays%20---'%29%3B%0A%0Afunction%20arraySideEffect%28arr%2C%20index%2C%20value%29%20%7B%0A%20%20const%20copiedArr%20%3D%20JSON.parse%28JSON.stringify%28arr%29%29%3B%0A%20%20copiedArr%5Bindex%5D%20%3D%20value%3B%0A%20%20return%20copiedArr%3B%0A%7D%0A%0Aconst%20globalArray%20%3D%20%5B1%2C%202%2C%203%5D%3B%0Aconst%20updatedArray%20%3D%20arraySideEffect%28globalArray%2C%200%2C%20'hi!'%29%3B%0A%0Aconsole.assert%28updatedArray%5B0%5D%20%3D%3D%3D%20'hi!'%2C%20'the%20returned%20array%20is%20updated%20...'%29%3B%0Aconsole.assert%28globalArray%5B0%5D%20%3D%3D%3D%201%2C%20'...%20but%20the%20global%20array%20has%20not%20changed%20...'%29%3B%0Aconsole.assert%28globalArray%20!%3D%3D%20updatedArray%2C%20%22...%20because%20you%20avoided%20side-effects!%22%29%3B%0A%0A%0Aconsole.log%28'---%20avoiding%20side%20effects%3A%20objects%20---'%29%3B%0A%0Afunction%20objectSideEffect%28obj%2C%20key%2C%20value%29%20%7B%0A%20%20const%20copiedObj%20%3D%20JSON.parse%28JSON.stringify%28obj%29%29%3B%0A%20%20copiedObj%5Bkey%5D%20%3D%20value%3B%0A%20%20return%20copiedObj%3B%0A%7D%0A%0Aconst%20globalObject%20%3D%20%7B%20a%3A%201%2C%20b%3A%202%2C%20c%3A%203%20%7D%3B%0Aconst%20updatedObject%20%3D%20objectSideEffect%28globalObject%2C%20'a'%2C%20'hi!'%29%3B%0A%0Aconsole.assert%28updatedObject.a%20%3D%3D%3D%20'hi!'%2C%20'the%20returned%20object%20is%20updated%20...'%29%3B%0Aconsole.assert%28globalObject.a%20%3D%3D%3D%201%2C%20'...%20but%20so%20is%20the%20global%20object%20...'%29%3B%0Aconsole.assert%28globalObject%20!%3D%3D%20updatedObject%2C%20%22...%20because%20they're%20the%20same%20thing!%22%29%3B%0A&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)
```js
// the best way to avoid side-effects is to copy arguments
//  if your function takes an object or array as a parameter
//  create a copy at the beginning of your function and use the copy
// psst. JS Tutor is helpful for this example


console.log('\n--- avoiding side effects: arrays ---');

function arraySideEffect(arr, index, value) {
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
```
  + PASS: the returned array is updated ...
  + PASS: ... but the global array has not changed ...
  + PASS: ... because you avoided side-effects!
  + PASS: the returned object is updated ...
  + PASS: ... but so is the global object ...
  + PASS: ... because they're the same thing!
```

## [challenges.js](./challenges.js)
* [open in JS Tutor](http://www.pythontutor.com/live.html#code=%2F%2F%20modify%20these%20functions%20so%20to%20avoid%20side-effects%0A%0Aconsole.log%28'%5Cn--%20side%20effects%3A%20first%20challenge%20--'%29%3B%0A%0Afunction%20addOneToEach%28arr%29%20%7B%0A%20%20for%20%28let%20i%20%3D%200%3B%20i%20%3C%20arr.length%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20arr%5Bi%5D%20%2B%3D%201%3B%0A%20%20%7D%0A%20%20return%20arr%3B%0A%7D%0A%0Aconst%20initialArray%20%3D%20%5B1%2C%202%5D%3B%0Aconst%20addedArray%20%3D%20addOneToEach%28initialArray%29%3B%0Aconsole.assert%28initialArray%20!%3D%3D%20addedArray%2C%20'array%3A%20first'%29%3B%0Aconsole.assert%28addedArray%5B0%5D%20%3D%3D%3D%202%2C%20'array%3A%20second'%29%3B%0Aconsole.assert%28addedArray%5B1%5D%20%3D%3D%3D%203%2C%20'array%3A%20third'%29%3B%0Aconsole.assert%28initialArray%5B0%5D%20%3D%3D%3D%201%2C%20'array%3A%20fourth'%29%3B%0Aconsole.assert%28initialArray%5B1%5D%20%3D%3D%3D%202%2C%20'array%3A%20fifth'%29%3B%0A%0A%0Aconsole.log%28'--%20side%20effects%3A%20second%20challenge%20--'%29%3B%0A%0Afunction%20setValueToKey%28obj%29%20%7B%0A%20%20for%20%28let%20key%20in%20obj%29%20%7B%0A%20%20%20%20obj%5Bkey%5D%20%3D%20key%3B%0A%20%20%7D%0A%20%20return%20obj%3B%0A%7D%0A%0Aconst%20initialObject%20%3D%20%7B%20a%3A%201%2C%20b%3A%202%20%7D%3B%0Aconst%20keyKeyObject%20%3D%20setValueToKey%28initialObject%29%3B%0Aconsole.assert%28initialObject%20!%3D%3D%20keyKeyObject%2C%20'object%3A%20first'%29%3B%0Aconsole.assert%28keyKeyObject.a%20%3D%3D%3D%20'a'%2C%20'object%3A%20second'%29%3B%0Aconsole.assert%28keyKeyObject.b%20%3D%3D%3D%20'b'%2C%20'object%3A%20third'%29%3B%0Aconsole.assert%28initialObject.a%20%3D%3D%3D%201%2C%20'object%3A%20fourth'%29%3B%0Aconsole.assert%28initialObject.b%20%3D%3D%3D%202%2C%20'object%3A%20fifth'%29%3B%0A&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)
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
```
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

## [copying-arrays-and-objects.js](./copying-arrays-and-objects.js)
* [open in JS Tutor](http://www.pythontutor.com/live.html#code=%2F%2F%20there%20are%20many%20ways%20to%20copy%20arrays%20%26%20objects%20in%20javascript%0A%2F%2F%20%20for%20now%20you%20will%20learn%20JSON.parse%28JSON.stringify%28thing%29%29%0A%2F%2F%20%20it's%20simplest%20to%20understand%20and%20works%20well%0A%0A%2F%2F%20JSON.stringify%20converts%20objects%20and%20arrays%20into%20strings%0A%2F%2F%20JSON.parse%20turns%20the%20strings%20into%20a%20new%20array%20or%20object%0A%0A%0Aconsole.log%28'%5Cn--%20JSON.parse%28JSON.stringify%28array%29%29%20--'%29%3B%0A%0A%2F%2F%20create%20a%20string%20version%20of%20the%20array%0Aconst%20array%20%3D%20%5Btrue%2C%20'hi'%5D%3B%0Aconst%20arrayStringified%20%3D%20JSON.stringify%28array%29%3B%0Aconsole.assert%28arrayStringified%20%3D%3D%3D%20'%5Btrue%2C%22hi%22%5D'%2C%20'arrayStringified'%29%3B%0A%0A%2F%2F%20create%20a%20new%20array%20based%20on%20the%20string%20version%0Aconst%20parsedArray%20%3D%20JSON.parse%28arrayStringified%29%3B%0Aconsole.assert%28parsedArray%5B0%5D%20%3D%3D%3D%20array%5B0%5D%2C%20'parsedArray%5B0%5D%20%3D%3D%3D%20array%5B0%5D'%29%3B%0Aconsole.assert%28parsedArray%5B1%5D%20%3D%3D%3D%20array%5B1%5D%2C%20'parsedArray%5B1%5D%20%3D%3D%3D%20array%5B1%5D'%29%3B%0A%0A%2F%2F%20and%20the%20new%20array%20is%20a%20true%20copy%20of%20the%20original%0Aconsole.assert%28parsedArray%20!%3D%3D%20array%2C%20'parsedArray%20!%3D%3D%20array'%29%3B%0A%0A%2F%2F%20or%20do%20it%20all%20in%20one%20step%3A%0Aconst%20copiedArray%20%3D%20JSON.parse%28JSON.stringify%28array%29%29%3B%0Aconsole.assert%28copiedArray%5B0%5D%20%3D%3D%3D%20array%5B0%5D%2C%20'copiedArray%5B0%5D%20%3D%3D%3D%20array%5B0%5D'%29%3B%0Aconsole.assert%28copiedArray%5B1%5D%20%3D%3D%3D%20array%5B1%5D%2C%20'copiedArray%5B1%5D%20%3D%3D%3D%20array%5B1%5D'%29%3B%0Aconsole.assert%28copiedArray%20!%3D%3D%20array%2C%20'copiedArray%20!%3D%3D%20array'%29%3B%0A%0A%0A%0Aconsole.log%28'--%20JSON.parse%28JSON.stringify%28object%29%29%20--'%29%3B%0A%0A%2F%2F%20create%20a%20string%20version%20of%20the%20object%0Aconst%20object%20%3D%20%7B%20a%3A%20true%2C%20b%3A%20'hi'%20%7D%3B%0Aconst%20objectStringified%20%3D%20JSON.stringify%28object%29%3B%0Aconsole.assert%28objectStringified%20%3D%3D%3D%20'%7B%22a%22%3Atrue%2C%22b%22%3A%22hi%22%7D'%2C%20'objectStringified'%29%3B%0A%0A%2F%2F%20create%20a%20new%20object%20based%20on%20the%20string%20version%0Aconst%20parsedObject%20%3D%20JSON.parse%28objectStringified%29%3B%0Aconsole.assert%28parsedObject.a%20%3D%3D%3D%20object.a%2C%20'parsedObject.a%20%3D%3D%3D%20object.a'%29%3B%0Aconsole.assert%28parsedObject.b%20%3D%3D%3D%20object.b%2C%20'parsedObject.b%20%3D%3D%3D%20object.b'%29%3B%0A%0A%2F%2F%20and%20the%20new%20object%20is%20true%20copy%20of%20the%20original%0Aconsole.assert%28parsedObject%20!%3D%3D%20object%2C%20'parsedObject%20!%3D%3D%20object'%29%3B%0A%0A%2F%2F%20or%20do%20it%20all%20in%20one%20step%3A%0Aconst%20copiedObject%20%3D%20JSON.parse%28JSON.stringify%28object%29%29%3B%0Aconsole.assert%28copiedObject%5B0%5D%20%3D%3D%3D%20object%5B0%5D%2C%20'copiedObject%5B0%5D%20%3D%3D%3D%20object%5B0%5D'%29%3B%0Aconsole.assert%28copiedObject%5B1%5D%20%3D%3D%3D%20object%5B1%5D%2C%20'copiedObject%5B1%5D%20%3D%3D%3D%20object%5B1%5D'%29%3B%0Aconsole.assert%28copiedObject%20!%3D%3D%20object%2C%20'copiedObject%20!%3D%3D%20object'%29%3B%0A%0A%0A%0A%0A&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)
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
```
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

## what-are-they.js

* [source](./what-are-they.js)
* [open in JS Tutor](http://www.pythontutor.com/live.html#code=%2F%2F%20arrays%20and%20objects%20arguments%20are%20passed%20by%20reference%0A%2F%2F%20%20this%20means%20a%20function%20is%20modifying%20the%20global%20data%20structure%0A%2F%2F%20side-effects%20happen%20when%3A%0A%2F%2F%20%20calling%20a%20function%20directly%20changes%20a%20global%20value%0A%2F%2F%20psst.%20JS%20Tutor%20is%20very%20helpful%20for%20these%20examples%0A%0Aconsole.log%28'%5Cn---%20side%20effects%3A%20arrays%20---'%29%3B%0A%0Afunction%20arraySideEffect%28arr%2C%20index%2C%20value%29%20%7B%0A%20%20arr%5Bindex%5D%20%3D%20value%3B%0A%20%20return%20arr%3B%0A%7D%0A%0Aconst%20globalArray%20%3D%20%5B1%2C%202%2C%203%5D%3B%0Aconst%20updatedArray%20%3D%20arraySideEffect%28globalArray%2C%200%2C%20'hi!'%29%3B%0A%0Aconsole.assert%28updatedArray%5B0%5D%20%3D%3D%3D%20'hi!'%2C%20'the%20returned%20array%20is%20updated%20...'%29%3B%0Aconsole.assert%28globalArray%5B0%5D%20%3D%3D%3D%20'hi!'%2C%20'...%20but%20so%20is%20the%20global%20array%20...'%29%3B%0Aconsole.assert%28globalArray%20%3D%3D%3D%20updatedArray%2C%20%22...%20because%20they're%20the%20same%20thing!%22%29%3B%0A%0A%0Aconsole.log%28'---%20side%20effects%3A%20objects%20---'%29%3B%0A%0Afunction%20objectSideEffect%28obj%2C%20key%2C%20value%29%20%7B%0A%20%20obj%5Bkey%5D%20%3D%20value%3B%0A%20%20return%20obj%3B%0A%7D%0A%0Aconst%20globalObject%20%3D%20%7B%20a%3A%201%2C%20b%3A%202%2C%20c%3A%203%20%7D%3B%0Aconst%20updatedObject%20%3D%20objectSideEffect%28globalObject%2C%20'a'%2C%20'hi!'%29%3B%0A%0Aconsole.assert%28updatedObject.a%20%3D%3D%3D%20'hi!'%2C%20'the%20returned%20object%20is%20updated%20...'%29%3B%0Aconsole.assert%28globalObject.a%20%3D%3D%3D%20'hi!'%2C%20'...%20but%20so%20is%20the%20global%20object%20...'%29%3B%0Aconsole.assert%28globalObject%20%3D%3D%3D%20updatedObject%2C%20%22...%20because%20they're%20the%20same%20thing!%22%29%3B%0A&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)
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
```
  + PASS: the returned array is updated ...
  + PASS: ... but so is the global array ...
  + PASS: ... because they're the same thing!
  + PASS: the returned object is updated ...
  + PASS: ... but so is the global object ...
  + PASS: ... because they're the same thing!
```

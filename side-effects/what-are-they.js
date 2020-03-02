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

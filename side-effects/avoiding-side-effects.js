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

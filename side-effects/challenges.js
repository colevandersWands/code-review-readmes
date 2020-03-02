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

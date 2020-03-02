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





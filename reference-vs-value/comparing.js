// comparing objects and arrays with === is based on reference
// comparisons are true when they reference the same thing in memory
// psst. JS Tutor will help a lot with this example

// examples with arrays

const arrayOne = ['hi', 'bye'];
const alsoArrayOne = arrayOne;
console.assert(alsoArrayOne === arrayOne, 'alsoArrayOne === arrayOne');
console.assert(alsoArrayOne[0] === arrayOne[0], 'alsoArrayOne[0] === arrayOne[0]');
console.assert(alsoArrayOne[1] === arrayOne[1], 'alsoArrayOne[1] === arrayOne[1]');

// two arrays with the same values do not compare to true
const arrayTwo = ['hi', 'bye'];
console.assert(arrayTwo !== arrayOne, 'arrayTwo !== arrayOne');
console.assert(arrayTwo[0] === arrayOne[0], 'arrayTwo[0] === arrayOne[0]');
console.assert(arrayTwo[1] === arrayOne[1], 'arrayTwo[1] === arrayOne[1]');

alsoArrayOne.push('mega');
console.assert(arrayTwo[2] === undefined, 'arrayTwo does not change when arrayOne does');
arrayTwo.push('huh?');
console.assert(arrayOne[2] === undefined, 'arrayOne does not change when arrayTwo does');

// examples with objects

const objectOne = { first: 'hi', second: 'bye' };
const alsoObjectOne = objectOne;
console.assert(alsoObjectOne === objectOne, 'alsoObjectOne === objectOne');
console.assert(alsoObjectOne.first === objectOne.first, 'alsoObjectOne.first === objectOne.first');
console.assert(alsoObjectOne.second === objectOne.second, 'alsoObjectOne.second === objectOne.second');


// two objects with the same values do not compare to true
const objectTwo = { first: 'hi', second: 'bye' };
console.assert(objectTwo !== objectOne, 'objectTwo !== objectOne');
console.assert(objectTwo.first === objectOne.first, 'objectTwo.first === objectOne.first');
console.assert(objectTwo.second === objectOne.second, 'objectTwo.second === objectOne.second');


alsoObjectOne.m = 'ega';
console.assert(alsoObjectTwo.m === undefined, 'objectTwo does not change when objectOne does');
objectTwo.h = 'uh?';
console.assert(objectOne.h === undefined, 'objectOne does not change when objectTwo does');

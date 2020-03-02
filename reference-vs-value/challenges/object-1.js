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

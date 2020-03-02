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

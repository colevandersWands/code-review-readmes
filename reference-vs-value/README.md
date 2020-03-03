# reference-vs-value/ - error

<div id='top'></div>

> Tue Mar 03 2020, 11:11:14 PM

### Exercises:

* [challenges/](./challenges/README.md) - error
* [comparing.js](#comparingjs---error) - error
* [const-reference-types.js](#const-reference-typesjs---error) - error
* [sharing-a-reference.js](#sharing-a-referencejs---pass) - pass
* [../README.md](../README.md)

---

## [comparing.js](./comparing.js) - error

```txt
+ PASS: alsoArrayOne === arrayOne
+ PASS: alsoArrayOne[0] === arrayOne[0]
+ PASS: alsoArrayOne[1] === arrayOne[1]
+ PASS: arrayTwo !== arrayOne
+ PASS: arrayTwo[0] === arrayOne[0]
+ PASS: arrayTwo[1] === arrayOne[1]
+ PASS: arrayTwo does not change when arrayOne does
- FAIL: arrayOne does not change when arrayTwo does
+ PASS: alsoObjectOne === objectOne
+ PASS: alsoObjectOne.first === objectOne.first
+ PASS: alsoObjectOne.second === objectOne.second
+ PASS: objectTwo !== objectOne
+ PASS: objectTwo.first === objectOne.first
+ PASS: objectTwo.second === objectOne.second
x ReferenceError: alsoObjectTwo is not defined
    at Object.<anonymous> ( [...] /reference-vs-value/comparing.js:41:16)
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

```

[TOP](#top)

---

## [const-reference-types.js](./const-reference-types.js) - error

```txt
x TypeError: Assignment to constant variable.
    at Object.<anonymous> ( [...] /reference-vs-value/const-reference-types.js:8:16)
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
// using const with arrays and objects is like locking a bag
//  someone can't steal your bag because it's locked in place
//  but they can still take things out or put things in

const constantObject = { a: 2 };
constantObject.a = 3; // no error
constantObject.b = 4; // no error
constantObject = { a: 3 }; // error!

const constantArray = [4];
constantArray[0] = 6; // no error
constantArray[1] = 7; // no error
constantArray = [6]; // error!

```

[TOP](#top)

---

## [sharing-a-reference.js](./sharing-a-reference.js) - pass

```txt
+ PASS: new5 stores has been modified
+ PASS: original variable was not modified
+ PASS: objectOne has changed after modifying objectTwo
+ PASS: objectTwo has changed after modifying objectOne
+ PASS: reassigning objectOne does not affect objectTwo
+ PASS: arrayOne has changed after modifying arrayTwo
+ PASS: arrayTwo has changed after modifying arrayOne
+ PASS: reassigning arrayOne does not affect arrayTwo
```

```js
// primitives are stored "by value", connected to one variable
//  assigning a primitive to a new variable makes a copy of it
//  modifying the new variable does not change the old one

const number5 = 5;
let new5 = number5;
new5 = new5 + 1;
console.assert(new5 === 6, 'new5 stores has been modified');
console.assert(number5 === 5, 'original variable was not modified');


// objects & arrays are stored by reference
//  both variables reference the same object in memory
//  modifying on variable changes both

let objectOne = {};
const objectTwo = objectOne;
objectTwo.x = 6;
console.assert(objectOne.x === 6, 'objectOne has changed after modifying objectTwo');
objectOne.y = 'hi!';
console.assert(objectTwo.y === 'hi!', 'objectTwo has changed after modifying objectOne');
objectOne = undefined;
console.assert(objectTwo !== undefined, 'reassigning objectOne does not affect objectTwo');

let arrayOne = [];
const arrayTwo = arrayOne;
arrayTwo[0] = 7;
console.assert(arrayOne[0] === 7, 'arrayOne has changed after modifying arrayTwo');
arrayOne[1] = 'bye!';
console.assert(arrayTwo[1] === 'bye!', 'arrayTwo has changed after modifying arrayOne');
arrayOne = undefined;
console.assert(arrayTwo !== undefined, 'reassigning arrayOne does not affect arrayTwo');



```

[TOP](#top)


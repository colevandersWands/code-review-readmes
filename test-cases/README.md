# test-cases/ - fail

> Tue Mar 03 2020, 10:44:06 PM

### Exercises:

* [evens.js](#evensjs---fail) - fail
* [../README.md](../README.md)

---

## [evens.js](./evens.js) - fail

```txt
- FAIL: Test 1, actual -> null
- FAIL: Test 2, actual -> null
- FAIL: Test 3, actual -> null
+ PASS: Test 4, actual -> null
- FAIL: Test 5, actual -> [1,2,3]
- FAIL: Test 6, actual -> ["1","3","5"]
+ PASS: Test 7, actual -> ["2","4","6"]
```

```js
const findEvensArray1 = ['.', '1', '2', ':'];
const findEvensArray2 = ['1', 'two', 'three', '10'];
const findEvensArray3 = ['one', '2', '', 'NaN'];
const findEvensArray4 = ['.', 1, 2, NaN];

const oddsToNotFind = ['1', '3', '5'];
const evensToFind = ['2', '4', '6'];

const findAllEvensTests = [
  { name: 'Test 1', args: [findEvensArray1], expected: ['2'] },
  { name: 'Test 2', args: [findEvensArray2], expected: ['10'] },
  { name: 'Test 3', args: [findEvensArray3], expected: ['2', ''] },
  { name: 'Test 4', args: [findEvensArray4], expected: null },
  { name: 'Test 5', args: [[1, 2, 3]], expected: null },
  { name: 'Test 6', args: [oddsToNotFind], expected: [] },
  { name: 'Test 7', args: [evensToFind], expected: ['2', '4', '6'] },
];

const findAllEvens = (arr) => {
  if (arr.length > 3) {
    return null;
  } else {
    return arr;
  };
};

for (let test of findAllEvensTests) {
  const expected = JSON.stringify(test.expected);
  const actual = JSON.stringify(findAllEvens(...test.args));
  console.assert(actual === expected, test.name + ', actual -> ' + actual);
};

```


# test-cases/ - fail

> Tue Mar 03 2020, 5:43:11 PM

### Exercises:

* [evens.js](#evens---fail) - fail

---

## [evens](./evens.js) - fail

* [open in JS Tutor](http://www.pythontutor.com/live.html#code=const%20findEvensArray1%20%3D%20%5B'.'%2C%20'1'%2C%20'2'%2C%20'%3A'%5D%3B%0Aconst%20findEvensArray2%20%3D%20%5B'1'%2C%20'two'%2C%20'three'%2C%20'10'%5D%3B%0Aconst%20findEvensArray3%20%3D%20%5B'one'%2C%20'2'%2C%20''%2C%20'NaN'%5D%3B%0Aconst%20findEvensArray4%20%3D%20%5B'.'%2C%201%2C%202%2C%20NaN%5D%3B%0A%0Aconst%20oddsToNotFind%20%3D%20%5B'1'%2C%20'3'%2C%20'5'%5D%3B%0Aconst%20evensToFind%20%3D%20%5B'2'%2C%20'4'%2C%20'6'%5D%3B%0A%0Aconst%20findAllEvensTests%20%3D%20%5B%0A%20%20%7B%20name%3A%20'Test%201'%2C%20args%3A%20%5BfindEvensArray1%5D%2C%20expected%3A%20%5B'2'%5D%20%7D%2C%0A%20%20%7B%20name%3A%20'Test%202'%2C%20args%3A%20%5BfindEvensArray2%5D%2C%20expected%3A%20%5B'10'%5D%20%7D%2C%0A%20%20%7B%20name%3A%20'Test%203'%2C%20args%3A%20%5BfindEvensArray3%5D%2C%20expected%3A%20%5B'2'%2C%20''%5D%20%7D%2C%0A%20%20%7B%20name%3A%20'Test%204'%2C%20args%3A%20%5BfindEvensArray4%5D%2C%20expected%3A%20null%20%7D%2C%0A%20%20%7B%20name%3A%20'Test%205'%2C%20args%3A%20%5B%5B1%2C%202%2C%203%5D%5D%2C%20expected%3A%20null%20%7D%2C%0A%20%20%7B%20name%3A%20'Test%206'%2C%20args%3A%20%5BoddsToNotFind%5D%2C%20expected%3A%20%5B%5D%20%7D%2C%0A%20%20%7B%20name%3A%20'Test%207'%2C%20args%3A%20%5BevensToFind%5D%2C%20expected%3A%20%5B'2'%2C%20'4'%2C%20'6'%5D%20%7D%2C%0A%5D%3B%0A%0Aconst%20findAllEvens%20%3D%20%28arr%29%20%3D%3E%20%7B%0A%20%20if%20%28arr.length%20%3E%203%29%20%7B%0A%20%20%20%20return%20null%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20return%20arr%3B%0A%20%20%7D%3B%0A%7D%3B%0A%0Afor%20%28let%20test%20of%20findAllEvensTests%29%20%7B%0A%20%20const%20expected%20%3D%20JSON.stringify%28test.expected%29%3B%0A%20%20const%20actual%20%3D%20JSON.stringify%28findAllEvens%28...test.args%29%29%3B%0A%20%20console.assert%28actual%20%3D%3D%3D%20expected%2C%20test.name%20%2B%20'%2C%20actual%20-%3E%20'%20%2B%20actual%29%3B%0A%7D%3B%0A&cumulative=false&curInstr=2&heapPrimitives=false&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)

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

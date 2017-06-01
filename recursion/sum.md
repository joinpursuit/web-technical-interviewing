# Question
Write a function `recursiveSum` that receives a positive number `n` and returns the sum of all numbers from 0...n.

Example
```js
recursiveSum(4) // returns 10  
recursiveSum(3) // returns 6
recursiveSum(2) // returns 3
```

# Answer
```js
function recursiveSum(n) {
  if (n === 0) {
    return 0
  } else {
    return n + recursiveSum(n - 1)
  }
}
```

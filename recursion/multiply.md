# Question
Write a function `recursiveMultiply` that receives a positive number `n` and returns the sum of all numbers from 0...n.

Example
```js
recursiveMultiply(4, 3) // returns 12  
recursiveMultiply(3, 2) // returns 6
recursiveMultiply(2, 1) // returns 2
```

# Answer
```js
function recursiveMultiply(a, b) {
  if (b === 0) {
    return 1
  } else {
    return a * recursiveMultiply(a, b - 1)
  }
}
```

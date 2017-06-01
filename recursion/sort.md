# Question
Write a function `isSorted` that receives an array and recursively iterates through the array and return true if the array is sorted and false if it is not sorted.

# Answer
```js
function isSorted(arr) {
  if (arr.length <= 1) {
    return true
  } else {
    if (arr[0] < arr[1]) {
      return isSorted(arr.slice(1))
    } else {
      return false
    }
  }
}

isSorted([1, 2, 3, 4, 5]) // returns true
isSorted([1, 2, 5, 3, 4]) // returns false
```

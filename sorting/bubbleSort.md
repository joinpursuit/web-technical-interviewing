# Question
Write a function that implements bubble sort.

# Answer
```js
function bubbleSort(arr) {
  let swapped = true
  while (swapped) {
    swapped = false
    for (let x = 0; x < arr.length - 1; x++) {
      if (arr[x] > arr[x + 1]) {
        [arr[x], arr[x + 1]] = [arr[x + 1], arr[x]]
        swapped = true
      }
    }
  }

  return arr
}
```

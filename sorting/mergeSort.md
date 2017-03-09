# Question
Write a function that implements merge sort.

# Answer
```js
function mergeSort(arr) {
  if (arr.length === 0) {
    return []
  } else if (arr.length === 1) {
    return arr
  }
  let midpoint = arr.length / 2
  let left = arr.slice(0, midpoint)
  let right = arr.slice(midpoint)

  function merge(arr1, arr2) {
    let output = []
    while (arr1.length !== 0 && arr2.length !== 0) {
      if(arr1[0] < arr2[0]) {
        output.push(arr1.shift())
      } else {
        output.push(arr2.shift())
      }
    }

    return output.concat(arr1).concat(arr2)
  }

  return merge(mergeSort(left), mergeSort(right))
}

mergeSort([3, 4, 6, 10, 11, 15, 1, 5, 8, 12, 14, 19])
```

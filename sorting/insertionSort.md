# Question
Write a function that implements insertion sort.

# Answer
```js
function insert(arr, rightIdx, val) {
  let i = rightIdx
  while (i > 0 && arr[i - 1] > val) {
    arr[i] = arr[i - 1]
    i--
  }

  arr[i] = val
};

var insertionSort = function(arr) {
    for(var i = 0; i < arr.length; i++){
        insert(arr, i, arr[i]);
    }

    return arr
};
```

# Question
Write a function that implements binary search on a sorted array and a target number and returns true or false depending on whether the target is present in the array. The function must be **recursive** and call itself.

Examples:
```js
bsearch([arr], target) // returns true or false
bsearch([1, 2, 3, 4, 5, 6, 7], 8) // returns false
bsearch([1, 2, 3, 4, 5, 6, 7], 3) // returns true
bsearch([1, 2, 3, 4, 5, 6, 7], -1) // returns false
```

# Answer
```js
function bsearch(arr, target) {
  var mid = parseInt(arr.length / 2);  
  if (target === arr[mid])   
  {  
    return true;  
  }  
  if (arr.length <= 1) {
    return false
  }
  let left = arr.slice(0, mid)
  let right = arr.slice(mid, arr.length)
  if (target > arr[mid]) {  
    return bsearch(right, target);  
  } else {  
    return bsearch(left, target);  
  }  
}
```

# Question
Write a function that implements radix sort.

# Answer
```js
const radixSort = (arr) => {
  let maxDigits = Math.max(...arr).toString().length;

  for (let k = 0; k < maxDigits; k++) {
    let radixArr = [[], [], [], [], [], [], [], [], [], []];

    for (let n = 0; n < arr.length; n++) {
      let num = arr[n];
      let numStr = num.toString();
      let digPosition = numStr.length - 1 - k;
      let digit = (digPosition < 0) ? 0 : numStr[digPosition];

      radixArr[digit].push(num)
    }

    arr = radixArr.reduce((total, bucket) => {
      return [...total, ...bucket];
    }, [])
  }

  return arr;
}
```

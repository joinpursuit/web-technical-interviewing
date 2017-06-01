# Question
Write a function `findPerms` that receives a string and returns an array with all the permutations that can be made from the characters in the string.

# Answer
```js
function findPerms(string) {
    if (string.length < 2) return string; // This is our break condition

    var perms = []; // This array will hold our permutations

    for (var i=0; i<string.length; i++) {
        var char = string[i];

        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) // if char was used already
            continue;           // skip it this time

        var remainingString = string.slice(0,i) + string.slice(i+1,string.length); //Note: you can concat Strings via '+' in JS

        for (var subPermutation of findPerms(remainingString))
            perms.push(char + subPermutation)

    }
    return perms;
}

findPerms("abc") // returns ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

```

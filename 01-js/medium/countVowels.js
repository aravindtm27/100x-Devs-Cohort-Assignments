/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let newArr = str.toLowerCase().split("");
    let count = 0;
    for(let i=0; i<newArr.length;i++){
      if(
        newArr[i]==="a"||
        newArr[i]==="e"||
        newArr[i]==="i"||
        newArr[i]==="o"||
        newArr[i]==="u"
        ){
          count++;
        }
    }
    return count;
}

module.exports = countVowels;
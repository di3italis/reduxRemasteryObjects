/*
Given a string, write a function "countLetters" that returns the most
common character within the sentence. If there are multiple characters
that appear the most, return the lexicographically smallest one
(e.g. if 'a' and 'b' are both the most common, return 'a' because it
is closest to the beginning of the alphabet). Be sure to exclude spaces
and punctuation.
*/

const countLetters = (string) => {
    // your code here
    // let charArr = string.split(" ").join("").split("").sort();
    let charArr = string.toLowerCase().match(/[a-zA-Z]/g).sort();
    let charObj = {};
    let maxCount = 0;
    let count = 0;
    let maxChar = "";

    let result = charArr.forEach(char => {
        charObj[char] = ((charObj[char] || 0) + 1)
        if (charObj[char] > maxCount) {
            maxCount = charObj[char];
            maxChar = char;
        } else if (charObj[char] === maxCount) {
            maxChar = char < maxChar ? char : maxChar;
        }
    })
   
    // console.log("charObj", charObj)
    // console.log("maxCount", maxCount)
    // console.log("maxChar", maxChar)
    // console.log("count", count)
    // console.log("charArr", charArr)
    
    return maxChar;
}

console.log(countLetters("The quick, brown fox jumped over the lazy dog.")); // e

/*** Do not change the code after this line ***/

module.exports = {
	countLetters,
};

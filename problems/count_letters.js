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
    let charArr = string.toLowerCase().match(/[a-zA-Z]/g).sort(); // remove spaces and punctuation, sort alphabetically
    let charObj = {}; // empty obj-> key: char, value: count
    let maxCount = 0; //  running tally
    let count = 0; // count of each char, reset each iteration
    let maxChar = ""; // char with max count

    let result = charArr.forEach(char => { // loop through charArr
        charObj[char] = ((charObj[char] || 0) + 1); // increment count of char in charObj
        if (charObj[char] > maxCount) { // is current char count greater than maxCount?
            maxCount = charObj[char]; // then update maxCount
            maxChar = char; // update maxChar
        } else if (charObj[char] === maxCount) { // otherwise, if tied,
            maxChar = char < maxChar ? char : maxChar; // update maxChar to lexicographically smallest
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

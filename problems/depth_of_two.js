/*
Given an object that has other objects nested inside of it, write a
function that takes that object and returns an array of all values
that are at a depth of 2.

BONUS:
Given a nested object with any number of levels, write a function
"anyDepthBonus" that returns an array of the key values contained
at any chosen level. The second argument of "anyDepthBonus" will be
a number designating the chosen level.

Hint: you may want to use recursion.
*/

const nestedObj = {
    a: "aloe",
    b: {
        c: "cello",
        d: "dello"
    },
    e: {
        f: "fellow",
        g: {
            h: "hello",
            i: "io"
        },
        j: "jello"
    }
}

const depthOfTwo = (obj) => {
    // your code here
    const vals = []; // empty array to store values
    Object.keys(obj).forEach(key => { // loop through keys of obj arg
        if (typeof obj[key] === "object" && obj[key] !== null) { // if value is an object and not null
            Object.values(obj[key]).forEach(val => // loop through values of obj[key]
            vals.push(val)) // push value obj to vals array
        }
    })
    
    return vals;
}

const anyDepthBonus = (obj, depth, currDepth = 1) => {
    // your code here
    const vals = []; // empty array to store values
    if (depth === currDepth) { // we are at specified depth
        return Object.values(obj); // return array of values at current depth
    } 
    Object.values(obj).forEach(val => { // loop through values of obj
        if (typeof val === "object" && val !== null && !Array.isArray(val)) { // if value is an object and not null, and not an array (array is also an object)
            vals.push(...anyDepthBonus(val, depth, currDepth + 1)); // recursively call anyDepthBonus with val, depth, and currDepth + 1
        }
    })
    return vals;
}



console.log(depthOfTwo(nestedObj));               // ["cello", "dello", "fellow", { h: "hello", i: "io" }, "jello"]
console.log(anyDepthBonus(nestedObj, 3))          // ["hello", "io"]

// /*** Do not change the code below this line ***/
module.exports = { depthOfTwo, anyDepthBonus }


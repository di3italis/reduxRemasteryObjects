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
    const vals = [];
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            Object.values(obj[key]).forEach(val =>
            vals.push(val))
        }
    })
    
    return vals;
}

const anyDepthBonus = (obj, depth, currDepth = 1) => {
    // your code here
    const vals = [];
    if (depth === currDepth) {
        return Object.values(obj);
    } 
    Object.values(obj).forEach(val => {
        if (typeof val === "object" && val !== null && !Array.isArray(val)) {
            vals.push(...anyDepthBonus(val, depth, currDepth + 1));
        }
    })
    return vals;
}



console.log(depthOfTwo(nestedObj));               // ["cello", "dello", "fellow", { h: "hello", i: "io" }, "jello"]
console.log(anyDepthBonus(nestedObj, 3))          // ["hello", "io"]

// /*** Do not change the code below this line ***/
module.exports = { depthOfTwo, anyDepthBonus }


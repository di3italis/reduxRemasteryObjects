const { expect } = require("chai");
const { depthOfTwo, anyDepthBonus } = require('../problems/depth_of_two')

describe('"depthOfTwo" returns values from second level of nested object.', () => {
    const nestedObj = {
        a: { 1: ["a","b"]},
        b: {
            2: "2nd",
            3: {
                4: "3rd",
                5: 55
            }
        }
    }

    it('Returns an array of values at the right depth.', () => {
        expect(depthOfTwo(nestedObj)).to.deep.equal([['a','b'], '2nd', { 4: '3rd', 5: 55}])
    })
})

describe('"anyDepthBonus" returns values from any selected level of nested object.', () => {
    const nestedObj = {
        a: { 1: ["a","b"]},
        b: {
            2: "2nd",
            3: {
                4: "3rd",
                5: 55
            }
        }
    }
    it('Returns an array of correct values from correct depth of nesting.', () => {
        expect(anyDepthBonus(nestedObj, 3)).to.deep.equal(["3rd", 55])
    })
})

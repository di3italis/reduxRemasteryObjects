const { expect } = require('chai')
let { countLetters } = require('../problems/count_letters');

describe('"countLetters" returns the most common letter', () => {
    it('Without lexigraphical order', () => {
        expect(countLetters('aaaabbcc')).to.deep.equal('a')
    })

    it('In lexigraphical order', () => {
        expect(countLetters('xxbbcc')).to.deep.equal('b')
    })
})

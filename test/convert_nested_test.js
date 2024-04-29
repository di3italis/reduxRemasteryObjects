const { expect } = require("chai");
const { convertNested, genNestedData } = require("../problems/convert_nested");


describe('"convertNested" returns a flattend object with correct data.', () => {
	var a = genNestedData(1);
	it("Returns the correct data", () => {
		expect(convertNested(a)).to.deep.equal(((k, n, c, p)=>({[k[1]]: {...[k, n, c].reduce((a, i)=>({...a,[i[0]]: i[1] }), {}),...p[1],}}))(...Object.entries(a[0])));
	});
});

module.exports = { genNestedData };

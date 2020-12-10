const methods = require("../src/index");
const chai = require("chai");
const expect = chai.expect;

var assert = require('assert');
describe("Range (2,10)  Endpoints ShouldBe{3,9}", function(){
    it("Should return: {3,9}", function(){
        expect(methods.EndPoints("(2,10)")).to.be.eqls([3,9])
    });
});
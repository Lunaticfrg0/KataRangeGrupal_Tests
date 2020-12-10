const methods = require("../src/index");
const chai = require("chai");
const expect = chai.expect;

var assert = require('assert');

describe("Range (2,10)  Endpoints ShouldBe{3,9}", function(){
    it("Should return: {3,9}", function(){
        expect(methods.EndPoints("(2,10)")).to.be.eqls([3,9])
    });
});
describe("Range [7,11)  Endpoints ShouldBe{7,10}", function(){
    it("Should return: {3,9}", function(){
        expect(methods.EndPoints("[7,11)")).to.be.eqls([7,10])
    });
});
describe("Range (2,6)  Endpoints ShouldBe{3,5}", function(){
    it("Should return: {3,5}", function(){
        expect(methods.EndPoints("(2,6)")).to.be.eqls([3,5])
    });
});

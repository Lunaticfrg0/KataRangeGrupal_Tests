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
describe("Range (7,11)  Endpoints ShouldBe{8,10}", function(){
    it("Should return: {8,10}", function(){
        expect(methods.EndPoints("(7,11)")).to.be.eqls([8,10])
    });
});
describe("Range(3, 8] areEqual[4, 9)", function(){
    it("Should return: true", function(){
        expect(methods.AreEquals("(3, 8]","[4, 9)")).to.be.eqls(true)
    });
});
describe("Range[5, 6) areEqual(4, 5]", function () {
    it("Should return: true", function () {
        expect(methods.AreEquals("[5, 6)", "(4, 5]")).to.be.eqls(true)
    });
});
describe("Range(4,8) areEqual[5,7]", function () {
    it("Should return: true", function () {
        expect(methods.AreEquals("(4,8)", "[5,7]")).to.be.eqls(true)
    });
});


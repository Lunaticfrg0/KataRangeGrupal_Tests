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
describe("Range[7,11) NotEqual(2,4]", function () {
    it("Should return: false", function () {
        expect(methods.AreEquals("[7,11)", "(2,4]")).to.be.eqls(false)
    });
});
describe("Range[7,13) NotEqual(2,4]", function () {
    it("Should return: false", function () {
        expect(methods.AreEquals("[7,13)", "(2,4]")).to.be.eqls(false)
    });
});
describe("Range (2,10] getAllPoints {3,4,5,6,7,8,9,10}", function () {
    it("Should return: {3,4,5,6,7,8,9,10}", function () {
        expect(methods.GetAllPoints("(2,10]")).to.be.eqls([3,4,5,6,7,8,9,10])
    });
});
describe("Range [5, 9] getAllPoints {5,6,7,8,9}", function () {
    it("Should return: {5,6,7,8,9}", function () {
        expect(methods.GetAllPoints("[5, 9]")).to.be.eqls([5,6,7,8,9])
    });
});
describe("Range [7,11) getAllPoints {7,8,9,10}", function () {
    it("Should return: {7,8,9,10}", function () {
        expect(methods.GetAllPoints("[7, 11)")).to.be.eqls([7,8,9,10])
    });
});
describe("Range(2, 10] containsRange {5,9}", function () {
    it("Should return: {7,8,9,10}", function () {
        expect(methods.Contains("(2, 10]", "[5, 9)")).to.be.eqls(true)
    });
});
describe("Range(4,7) containsRange {5,6}", function () {
    it("Should return: true", function () {
        expect(methods.Contains("(4,7)", "{5,6}")).to.be.eqls(true)
    });
});
describe("Range(2,10] containsRange [5,9)", function () {
    it("Should return: true", function () {
        expect(methods.Contains("(2,10]", "[5,9)")).to.be.eqls(true)
    });
});
describe("Range[7, 11) Doesntcontains [4,11]", function () {
    it("Should return: false", function () {
        expect(methods.Contains("[7, 11)", "[4,11]")).to.be.eqls(false)
    });
});
describe("Range[2,5) Doesntcontains (2,10]", function () {
    it("Should return: false", function () {
        expect(methods.Contains("[2,5)", "(2,10]")).to.be.eqls(false)
    });
});
describe("Range[3,5) Overlaps (2,10]", function () {
    it("Should return: true", function () {
        expect(methods.Overlaps("[3,5)", "(2,10]")).to.be.eqls(true)
    });
});


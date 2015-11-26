const Lab = require("lab");
const lab = exports.lab = Lab.script();
const should = require("chai").should;

should();

lab.experiment("plight", () => {
  lab.test("should", (done) => {
    return done();
  });
  lab.test("should fail", (done) => {
    true.should.equal(false);
    return done();
  });
});

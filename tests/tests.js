var expect = require('chai').expect;

it('truthyness', function () {
  expect(true).to.be.true;

});

describe('array length', function () {
  it('arrays have length', function () {
    var array = [1,2,3];
    setTimeout(function () {
    expect(array.length).to.exist;
    done();
    }, 0);
  });
});

describe('helloWorld', function () {
  it('hello should return world', function () {
    var hello = require('../index.js');

    expect(hello()).to.equal('world');
   });
});

describe('utility functions', function() {
  describe('range', function() {
    var range = require('../range.js');

    it('range should output an array', function() {
      expect(range()).to.be.an('array');
    });

    it('array should be the length passes as the argument', function () {
      expect(range()).to.have.length(0);
      expect(range(1)).to.have.length(1);
      expect(range(10)).to.have.length(10);
    });
    it('should return an array range', function () {
      expect(range(3)).to.eql([0,1,2]);
      expect(range(5)).to.eql([0,1,2,3,4]);
    });
    it('should return an array range', function () {
      expect(range(3,5)).to.eql([3,4]);
      expect(range(4,9)).to.eql([4,5,6,7,8]);
    });
  });


  describe('rangeObj', function () {
    it('should return an object', function () {
      var rangeObj = require('../rangeObj');

      expect(rangeObj()).to.be.an.object;
    });
  });
});




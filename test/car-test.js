var assert = require('chai').assert;
var Cars = require('../lib/cars.js');

describe('Cars',function(){

  it('should be a function', function () {
    assert.isFunction(Cars)
  })
  it ('should instantiate Cars', function() {
    var car = new Cars();
    assert.isObject(car);
  });
  it ('should take the first argument and set it as the "x" property of the instantiated object', function () {
    var car = new Cars(280);
    assert.equal(car.x, 280);
  });

  it ('should take the second argument and set it as the "y" property of the instantiated object', function() {
    var car = new Cars(280, 560);
    assert.equal(car.y, 560);
  });

  it ('should take the third argument and set it as the "width" propert of the instantiated object', function () {
    var car = new Cars(280, 560, 40);
    assert.equal(car.width, 40);
  });

  it ('should take the fourth argument and set is as the "height" property of the instantiated object', function() {
    var car = new Cars(280, 560, 40, 40);
    assert.equal(car.height, 40);
  });

  describe('car', function() {

    it('should have a method called "driveRight()"',
    function() {
      var car = new Cars()
      assert.isFunction(car.driveRight);
    });

    it('should have a method called "driveLeft()"', function () {
      var car = new Cars();
      assert.isFunction(car.driveLeft)
    });

    it('"driveRight()" should increment the "x" property by 1',
    function() {
      var car = new Cars(0, 0, 40, 40);
      car.driveRight();
      assert.equal(car.x, 1);
    });

    it('"driveLeft()" should decrement the "x" property by 1', function () {
      var car = new Cars(80, 0, 40, 40);
      car.driveLeft();
      assert.equal(car.x, 79);
    })






/*end of describe car*/ });
/* end of describe Cars*/ });
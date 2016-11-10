var assert = require('chai').assert;
var Turtles = require('../lib/turtles.js');

describe('Turtles',function(){

  it('should be a function', function () {
    assert.isFunction(Turtles);
  });
  it ('should instantiate Turtles', function() {
    var turtle = new Turtles();
    assert.isObject(turtle);
  });
  it ('should take the first argument and set it as the "x" property of the instantiated object', function () {
    var turtle = new Turtles(280);
    assert.equal(turtle.x, 280);
  });

  it ('should take the second argument and set it as the "y" property of the instantiated object', function() {
    var turtle = new Turtles(280, 560);
    assert.equal(turtle.y, 560);
  });

  it ('should take the third argument and set it as the "width" propert of the instantiated object', function () {
    var turtle = new Turtles(280, 560, 40);
    assert.equal(turtle.width, 40);
  });

  it ('should take the fourth argument and set is as the "height" property of the instantiated object', function() {
    var turtle = new Turtles(280, 560, 40, 40);
    assert.equal(turtle.height, 40);
  });

  describe('turtle', function() {

    it('should have a method called "swimLeft()"',
    function() {
      var turtle = new Turtles();
      assert.isFunction(turtle.swimLeft);
    });


    it('"swimLeft()" should decrement the "x" property depending on level of user but start off decrementing by 2',
    function() {
      var turtle = new Turtles(400, 0, 40, 40);
      turtle.swimLeft();
      assert.equal(turtle.x, 398);
    });




/*end of describe car*/ });
/* end of describe Cars*/ });

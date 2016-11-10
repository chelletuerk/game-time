var Frog = require('../lib/frog.js');
var assert = require('chai').assert;

describe('Frog',function(){
  it('should be a function', function() {
    assert.isFunction(Frog);
  });

it ('should instantiate Frog', function() {
  var frog = new Frog();
  assert.isObject(frog);
});

it ('should take the first argument and set it as the "x" property of the instantiated object', function () {
  var frog = new Frog(280);
  assert.equal(frog.x, 280);
});

it ('should take the second argument and set it as the "y" property of the instantiated object', function() {
  var frog = new Frog(280, 560);
  assert.equal(frog.y, 560);
});

it ('should take the third argument and set it as the "width" propert of the instantiated object', function () {
  var frog = new Frog(280, 560, 40);
  assert.equal(frog.width, 40);
});

it ('should take the fourth argument and set is as the "height" property of the instantiated object', function() {
  var frog = new Frog(280, 560, 40, 40);
  assert.equal(frog.height, 40);
});

describe('frog', function() {

  it('should have a method called "moveRight()"',
  function() {
    var frog = new Frog();
    assert.isFunction(frog.moveRight);
  });

  it('should have a method called "moveLeft()"', function () {
    var frog = new Frog();
    assert.isFunction(frog.moveLeft);
  });

  it('should have a method called "moveUp()"', function () {
    var frog = new Frog();
    assert.isFunction(frog.moveUp);
  });

  it('should have a method called "moveDown"', function () {
    var frog = new Frog();
    assert.isFunction(frog.moveDown);
  });

it('"moveRight()" should increment the "x" property by 40',
function() {
  var frog = new Frog(0, 0, 40, 40);
  frog.moveRight();
  assert.equal(frog.x, 40);
});

it('"moveLeft()" should decrement the "x" property by 40', function () {
  var frog = new Frog(80, 0, 40, 40);
  frog.moveLeft();
  assert.equal(frog.x, 40);
});

it('"moveUp()" should decrement the "y" property by 40', function () {
  var frog = new Frog(80, 80);
  frog.moveUp();
  assert.equal(frog.y, 40);
});

it('"moveDown()" should increment the "y" property by 40', function() {
  var frog = new Frog(80, 80, 40, 40);
  frog.moveDown();
  assert.equal(frog.y, 120);
});


}); //end of describe frog block
});//end of describe Frog block

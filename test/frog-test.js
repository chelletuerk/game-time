var Frog = require('../lib/frog.js')
var assert = require('chai').assert

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
  var frog = new Frog()
  assert.isFunction(frog.moveRight);
});

it('"moveRight()" should increment the "x" property by 40',
function() {
  var frog = new Frog(40);
  assert.equal(frog.x, 80);
});

//BEGINNING OF COLLISION TEST
xit('has a function that finds top right corner of frog', function() {
  var frog = new Frog(240, 560, 40);
  frog.topRight();
  assert.equal(frog.x, 280);
  assert.equal(frog.y, 560);
});




















}); //end of describe frog block
});//end of describe Frog block

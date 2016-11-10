var Lilypad = require('../lib/lilypads.js');
var assert = require('chai').assert;

describe('Lilypad',function(){
  it('should be a function', function() {
    assert.isFunction(Lilypad);
  });

it ('should instantiate Lilypad', function() {
  var lilypad = new Lilypad();
  assert.isObject(lilypad);
});

it ('should take the first argument and set it as the "x" property of the instantiated object', function () {
  var lilypad = new Lilypad(280);
  assert.equal(lilypad.x, 280);
});

it ('should take the second argument and set it as the "y" property of the instantiated object', function() {
  var lilypad = new Lilypad(280, 560);
  assert.equal(lilypad.y, 560);
});

it ('should take the third argument and set it as the "width" propert of the instantiated object', function () {
  var lilypad = new Lilypad(280, 560, 40);
  assert.equal(lilypad.width, 40);
});

it ('should take the fourth argument and set is as the "height" property of the instantiated object', function() {
  var lilypad = new Lilypad(280, 560, 40, 40);
  assert.equal(lilypad.height, 40);
});

});//end of describe Lilypad block

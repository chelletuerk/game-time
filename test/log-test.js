var assert = require('chai').assert;
var Logs = require('../lib/logs.js');

describe('Logs',function(){

  it('should be a function', function () {
    assert.isFunction(Logs);
  });
  it ('should instantiate Logs', function() {
    var log = new Logs();
    assert.isObject(log);
  });
  it ('should take the first argument and set it as the "x" property of the instantiated object', function () {
    var log = new Logs(280);
    assert.equal(log.x, 280);
  });

  it ('should take the second argument and set it as the "y" property of the instantiated object', function() {
    var log = new Logs(280, 560);
    assert.equal(log.y, 560);
  });

  it ('should take the third argument and set it as the "width" propert of the instantiated object', function () {
    var log = new Logs(280, 560, 40);
    assert.equal(log.width, 40);
  });

  it ('should take the fourth argument and set is as the "height" property of the instantiated object', function() {
    var log = new Logs(280, 560, 40, 40);
    assert.equal(log.height, 40);
  });

  describe('log', function() {

    it('should have a method called "floatRight()"',
    function() {
      var log = new Logs();
      assert.isFunction(log.floatRight);
    });


    it('"floatRight()" should increment the "x" property by one',
    function() {
      var log = new Logs(0, 0, 40, 40);
      log.floatRight();
      assert.equal(log.x, 1);
    });




/*end of describe car*/ });
/* end of describe Cars*/ });

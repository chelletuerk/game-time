var LilyPads = require('./lilypads')

var LilyPadsGenerator = function(context) {
  this.one = []
  this.one.push(new LilyPads(5, 0, 60, 40, context));
  this.one.push(new LilyPads(137, 0, 60, 40, context));
  this.one.push(new LilyPads(269, 0, 60, 40, context));
  this.one.push(new LilyPads(401, 0, 60, 40, context));
  this.one.push(new LilyPads(533, 0, 60, 40, context));
  this.all = [this.one]
}

module.exports = LilyPadsGenerator;

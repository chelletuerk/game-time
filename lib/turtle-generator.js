var Turtles = require('./turtles')

var TurtleGenerator = function(context) {
  this.one = []
  this.two = []
  this.one.push(new Turtles(600, 200, 50, 35, context));
  this.one.push(new Turtles(660, 200, 50, 35, context));
  this.one.push(new Turtles(720, 200, 50, 35, context));
  this.one.push(new Turtles(800, 200, 50, 35, context));
  this.one.push(new Turtles(960, 200, 50, 35, context));
  this.one.push(new Turtles(1020, 200, 50, 35, context));
  this.two.push(new Turtles(690, 120, 50, 35, context));
  this.two.push(new Turtles(750, 120, 50, 35, context));
  this.two.push(new Turtles(810, 120, 50, 35, context));
  this.two.push(new Turtles(990, 120, 50, 35, context));
  this.two.push(new Turtles(1050, 120, 50, 35, context));
  this.two.push(new Turtles(1120, 120, 50, 35, context));
  this.all = [this.one, this.two]
}

module.exports = TurtleGenerator;

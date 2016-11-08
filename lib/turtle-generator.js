var Turtles = require('./turtles')

var TurtleGenerator = function(context) {
  this.one = []
  this.two = []
  this.three = []
  this.one.push(new Turtles(600, 200, 50, 35, context));
  this.one.push(new Turtles(660, 200, 50, 35, context));
  this.one.push(new Turtles(720, 200, 50, 35, context));
  this.one.push(new Turtles(900, 200, 50, 35, context));
  this.one.push(new Turtles(960, 200, 50, 35, context));
  this.one.push(new Turtles(1020, 200, 50, 35, context));
  this.two.push(new Turtles(690, 120, 50, 35, context));
  this.two.push(new Turtles(750, 120, 50, 35, context));
  this.two.push(new Turtles(810, 120, 50, 35, context));
  this.two.push(new Turtles(990, 120, 50, 35, context));
  this.two.push(new Turtles(1050, 120, 50, 35, context));
  this.two.push(new Turtles(1120, 120, 50, 35, context));
  this.three.push(new Turtles(690, 40, 50, 35, context));
  this.three.push(new Turtles(750, 40, 50, 35, context));
  this.three.push(new Turtles(810, 40, 50, 35, context));
  this.three.push(new Turtles(990, 40, 50, 35, context));
  this.three.push(new Turtles(1050, 40, 50, 35, context));
  this.three.push(new Turtles(1120, 40, 50, 35, context));
  this.all = [this.one, this.two, this.three]
}

module.exports = TurtleGenerator;

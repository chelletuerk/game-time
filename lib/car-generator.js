var Cars = require('./cars')

function CarGenerator(context) {
  this.one = []
  this.two = []
  this.three = []
  this.four = []
  this.five = []
  this.generateCars(this.one, 0, 520, {minus: true, val: 180}, context)
  this.generateCars(this.two, 600, 480, {plus: true, val: 180}, context)
  this.generateCars(this.three, 80, 440, {minus: true, val: 120}, context)
  this.generateCars(this.four, 540, 400, {minus: true, val: 140}, context)
  this.generateCars(this.five, 20, 360, {minus: true, val: 140}, context)
  this.allLeft = [this.two, this.four]
  this.allRight = [this.one, this.three, this.five]
}

CarGenerator.prototype.generateCars = function(lane, x, y, instructions, ctx) {
  [0, 1, 2].forEach(function(e) {
    lane.push(new Cars(x, y, 60, 35, ctx));
    if (instructions.minus) x -= instructions.val;
    if (instructions.plus) x += instructions.val;
  });
}

module.exports = CarGenerator;

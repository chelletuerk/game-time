function Turtles (x, y, width, height, context) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.context = context;
}
var turtle1 = document.getElementById('turtle1')

Turtles.prototype.draw = function() {
  this.context.drawImage(turtle1, this.x, this.y, this.width, this.height)
  return this;
};

Turtles.prototype.swimRight = function() {
  if (this.x > 600){
    this.x = -80;
  }
  return (this.x++);
};

Turtles.prototype.swimLeft = function() {
  if (this.x < -50){
    this.x = 680
  };
  return (this.x--);
};



module.exports = Turtles;

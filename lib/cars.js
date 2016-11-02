function Cars(x, y, width, height, context) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.context = context;
};

Cars.prototype.draw = function() {
  this.context.fillStyle = 'red';
  this.context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Cars.prototype.drawLaneTwo = function() {
  this.context.fillStyle = 'blue';
  this.context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Cars.prototype.driveRight = function() {
  if (this.x > 600) {
    this.x = -60;
  }
  return (this.x++);
};

Cars.prototype.driveLeft = function() {
  if (this.x < 0) {
  this.x = 660;
  }
  return (this.x--);
};

module.exports = Cars;

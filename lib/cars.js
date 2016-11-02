function Cars(x, y, width, height, context) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.context = context;
};

Cars.prototype.driveRight = function() {
  this.context.fillStyle = 'red';
  this.context.fillRect(this.x++, this.y, this.width, this.height);
}


module.exports = Cars;

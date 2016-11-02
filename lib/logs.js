function Logs (x, y, width, height, context) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.context = context;
}

Logs.prototype.draw = function() {
  this.context.fillStyle = 'rosybrown';
  this.context.fillRect(this.x, this.y, this.width, this.height, this.context)
  return this;
};

Logs.prototype.floatRight = function() {
  if (this.x > 600){
    this.x = -80;
  }
  return (this.x++);
};

Logs.prototype.floatLeft = function() {
  if (this.x < 0){
    this.x = 680
  };
  return (this.x--);
};



module.exports = Logs;

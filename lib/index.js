function Frog(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}




Frog.prototype.moveLeft = function() {
this.x = this.x - 1;
}

Frog.prototype.moveRight = function() {
this.x = this.x + 1;
}

Frog.prototype.moveUp = function() {
this.y = this.y - 1;
}

Frog.prototype.moveDown = function() {
this.y = this.y + 1;
}

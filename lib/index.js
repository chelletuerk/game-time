var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Frog(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Frog.prototype.draw = function() {
  context.fillStyle = 'green';
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
}

var frog = new Frog(400, 580, 20, 20)
frog.draw();

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

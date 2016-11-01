var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Frog(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
};

Frog.prototype.draw = function() {
  context.fillStyle = 'green';
  context.fillRect(this.x, this.y, this.width, this.height);
};

var frog = new Frog(400, 580, 20, 20)

window.addEventListener('keydown', function(event){
    if (event.keyCode === 38){
        frog.y--;
      } else if (event.keyCode === 40){
        frog.y++;
      } else if (event.keyCode === 37){
        frog.x--;
      } else if (event.keyCode === 39){
        frog.x++;
      }
  });


  requestAnimationFrame(function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    frog.draw();
    requestAnimationFrame(gameLoop);
  });

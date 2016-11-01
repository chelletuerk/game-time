var Frog = require('./frog.js')
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var frog = new Frog(400, 580, 20, 20, context)

window.addEventListener('keydown', function(event){
    if (event.keyCode === 38){
        frog.moveUp();
      } else if (event.keyCode === 40){
        frog.moveDown();
      } else if (event.keyCode === 37){
        frog.moveLeft();
      } else if (event.keyCode === 39){
        frog.moveRight();
      }
  });


  requestAnimationFrame(function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    frog.draw();
    requestAnimationFrame(gameLoop);
  });

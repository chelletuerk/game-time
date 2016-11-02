var Frog = require('./frog.js')
var Cars = require('./cars.js')
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var frog = new Frog(520, 480, 40, 40, context)
var carOne = new Cars(0, 440, 60, 38, context);

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
    carOne.driveRight();
    requestAnimationFrame(gameLoop);
  });

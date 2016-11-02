var Frog = require('./frog.js')
var Cars = require('./cars.js')
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var frog = new Frog(280, 560, 40, 40, context);
var carArrayOne = [];
var carArrayTwo = [];
var carArrayThree = [];
var carArrayFour = [];
carArrayOne.push(new Cars(0, 520, 60, 40, context));
carArrayOne.push(new Cars(-180, 520, 60, 40, context));
carArrayOne.push(new Cars(-360, 520, 60, 40, context));
carArrayTwo.push(new Cars(600, 480, 40, 40, context));
carArrayTwo.push(new Cars(760, 480, 40, 40, context));
carArrayTwo.push(new Cars(920, 480, 40, 40, context));
carArrayThree.push(new Cars(80, 440, 60, 40, context));
carArrayThree.push(new Cars(-80, 440, 60, 40, context));
carArrayThree.push(new Cars(-240, 440, 60, 40, context));
carArrayFour.push(new Cars(540, 400, 80, 40, context));
carArrayFour.push(new Cars(400, 400, 80, 40, context));
carArrayFour.push(new Cars(260, 400, 80, 40, context));

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frog.draw();
  carArrayOne.forEach(function (cars) {
    cars.draw().driveRight();
  });
  carArrayTwo.forEach(function (cars) {
    cars.drawLaneTwo().driveLeft();
  });
  carArrayThree.forEach(function (cars) {
    cars.drawLaneThree().driveRight();
  });
carArrayFour.forEach(function (cars) {
    cars.drawLaneFour().driveLeft();
});
  requestAnimationFrame(gameLoop);
});


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

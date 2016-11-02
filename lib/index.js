var Frog = require('./frog.js')
var Cars = require('./cars.js')
var Logs = require('./logs.js')
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var frog = new Frog(280, 560, 40, 40, context);
var carArrayOne = [];
var carArrayTwo = [];
var carArrayThree = [];
var carArrayFour = [];
var carArrayFive = [];
var logArrayOne = [];
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
carArrayFive.push(new Cars(20, 360, 60, 40, context));
carArrayFive.push(new Cars(-160, 360, 60, 40, context));
carArrayFive.push(new Cars(-340, 360, 60, 40, context));
logArrayOne.push(new Logs(0, 240, 100, 35, context));
logArrayOne.push(new Logs(-200, 240, 100, 35, context));
logArrayOne.push(new Logs(-400, 240, 100, 35, context));



requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frog.draw();
  carArrayOne.forEach(function (car) {
    car.draw().driveRight();
  });
  carArrayTwo.forEach(function (car) {
    car.drawLaneTwo().driveLeft();
  });
  carArrayThree.forEach(function (car) {
    car.drawLaneThree().driveRight();
  });
  carArrayFour.forEach(function (car) {
      car.drawLaneFour().driveLeft();
  });
  carArrayFive.forEach(function (car) {
      car.drawLaneFive().driveRight();
  });
  logArrayOne.forEach(function (log) {
      log.draw().floatRight();
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

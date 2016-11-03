var Frog = require('./frog.js')
var Cars = require('./cars.js')
var Logs = require('./logs.js')
var Turtles = require('./turtles.js')
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var frog = new Frog(280, 560, 40, 40, context);
var frogger = document.getElementById('frog')
var carArrayOne = [];
var carArrayTwo = [];
var carArrayThree = [];
var carArrayFour = [];
var carArrayFive = [];
var logArrayOne = [];
var turtleArrayOne = [];
var logArrayTwo = [];
var turtleArrayTwo = [];
var logArrayThree = [];

function collideCar(car) {
  if (frog.x < car.x + car.width &&
    frog.x + frog.width > car.x &&
    frog.y < car.y + car.height &&
    frog.height + frog.y > car.y){
      window.alert("ahhh!!!!")
      window.location.reload();
    }
}

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
turtleArrayOne.push(new Turtles(600, 200, 50, 35, context));
turtleArrayOne.push(new Turtles(660, 200, 50, 35, context));
turtleArrayOne.push(new Turtles(720, 200, 50, 35, context));
turtleArrayOne.push(new Turtles(900, 200, 50, 35, context));
turtleArrayOne.push(new Turtles(960, 200, 50, 35, context));
turtleArrayOne.push(new Turtles(1020, 200, 50, 35, context));
logArrayTwo.push(new Logs(0, 160, 300, 35, context));
turtleArrayTwo.push(new Turtles(690, 120, 50, 35, context));
turtleArrayTwo.push(new Turtles(750, 120, 50, 35, context));
turtleArrayTwo.push(new Turtles(810, 120, 50, 35, context));
turtleArrayTwo.push(new Turtles(990, 120, 50, 35, context));
turtleArrayTwo.push(new Turtles(1050, 120, 50, 35, context));
turtleArrayTwo.push(new Turtles(1120, 120, 50, 35, context));
logArrayThree.push(new Logs(-100, 80, 100, 35, context));
logArrayThree.push(new Logs(-360, 80, 100, 35, context));
logArrayThree.push(new Logs(-560, 80, 100, 35, context));



requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frog.draw();
  carArrayOne.forEach(function (car) {
    car.draw().driveRight();
    collideCar(car);
      });
  carArrayTwo.forEach(function (car) {
    car.drawLaneTwo().driveLeft();
    collideCar(car);
  });
  carArrayThree.forEach(function (car) {
    car.drawLaneThree().driveRight();
    collideCar(car);
  });
  carArrayFour.forEach(function (car) {
      car.drawLaneFour().driveLeft();
      collideCar(car);
  });
  carArrayFive.forEach(function (car) {
      car.drawLaneFive().driveRight();
      collideCar(car);
  });
  logArrayOne.forEach(function (log) {
      log.draw().floatRight();

  });
  turtleArrayOne.forEach(function (turtle){
      turtle.draw().swimLeft();
  });
  logArrayTwo.forEach(function (log){
      log.draw().floatRight();
  });
  turtleArrayTwo.forEach(function (turtle){
      turtle.draw().swimLeft();
  });
  logArrayThree.forEach(function (log){
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

var Frog = require('./frog.js')
var Cars = require('./cars.js')
var Logs = require('./logs.js')
var Turtles = require('./turtles.js')
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var frog = new Frog(280, 560, 40, 40, context);
var car1 = document.getElementById('car1')
var car2 = document.getElementById('car2')
var car3 = document.getElementById('car3')
var truck1 = document.getElementById('truck1')
var truck2 = document.getElementById('truck2')
var log1 = document.getElementById('log1')
var turtle1 = document.getElementById('turtle1')
var isDrowning = true;
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


carArrayOne.push(new Cars(0, 520, 60, 40, context));
carArrayOne.push(new Cars(-180, 520, 60, 40, context));
carArrayOne.push(new Cars(-360, 520, 60, 40, context));
carArrayTwo.push(new Cars(600, 480, 60, 40, context));
carArrayTwo.push(new Cars(780, 480, 60, 40, context));
carArrayTwo.push(new Cars(940, 480, 60, 40, context));
carArrayThree.push(new Cars(80, 440, 60, 35, context));
carArrayThree.push(new Cars(-80, 440, 60, 35, context));
carArrayThree.push(new Cars(-240, 440, 60, 35, context));
carArrayFour.push(new Cars(540, 400, 60, 40, context));
carArrayFour.push(new Cars(400, 400, 60, 40, context));
carArrayFour.push(new Cars(260, 400, 60, 40, context));
carArrayFive.push(new Cars(20, 360, 60, 35, context));
carArrayFive.push(new Cars(-160, 360, 60, 35, context));
carArrayFive.push(new Cars(-340, 360, 60, 35, context));
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

function win() {
if (frog.y < 80) {
  window.location.reload();
  }
}

function collideCar(car) {
  if (frog.x < car.x + (car.width/1.5) &&
    frog.x + frog.width > car.x &&
    frog.y < car.y + car.height &&
    frog.height + frog.y > car.y){
      alert("ahhh!!!!")
      window.location.reload();
    }
}

function logTravel(log) {
  if (frog.x < log.x + log.width &&
    frog.x + frog.width > log.x &&
    frog.y < log.y + log.height &&
    frog.height + frog.y > log.y){
      if(frog.x < 560){
          frog.x++
          isDrowning = false;
        }
    }
}
function turtleTravel(turtle) {
  if (frog.x < turtle.x + turtle.width &&
    frog.x + frog.width > turtle.x &&
    frog.y < turtle.y + turtle.height &&
    frog.height + frog.y > turtle.y){
      if(frog.x > 0){
          frog.x--
          isDrowning = false;
        }
    }
}
function drowningFrog() {
  if (frog.y < 280 && frog.y > 40 && isDrowning) {
      alert('You drowned!!!!')
      window.location.reload()
    } else {
      isDrowning = true;
    }
  }

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
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
      logTravel(log);
  });
  turtleArrayOne.forEach(function (turtle){
      turtle.draw().swimLeft();
      turtleTravel(turtle);
  });
  logArrayTwo.forEach(function (log){
      log.draw().floatRight();
      logTravel(log);
  });
  turtleArrayTwo.forEach(function (turtle){
      turtle.draw().swimLeft();
      turtleTravel (turtle);
  });
  logArrayThree.forEach(function (log){
      log.draw().floatRight();
      logTravel(log);
  });
  drowningFrog();
  win();
  frog.draw();
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

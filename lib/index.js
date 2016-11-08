var CarGenerator = require('./car-generator')
var LogGenerator = require('./log-generator')
var TurtleGenerator = require('./turtle-generator')
var Frog = require('./frog.js')
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
var turtleArrayOne = [];
var turtleArrayTwo = [];
var cars = new CarGenerator(context);
var logs = new LogGenerator(context);
var turtles = new TurtleGenerator(context);
var level = 1;


function collideCar(car) {
  if (frog.x < car.x + (car.width/1.5) &&
    frog.x + frog.width > car.x &&
    frog.y < car.y + car.height &&
    frog.height + frog.y > car.y){
      alert("ahhh!!!!")
      level = 1;
      levelUpRight(cars)
      resetFrog();
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
    frog.height + frog.y > turtle.y) {
      if(frog.x > 0){
        frog.x -= 2;
        isDrowning = false;
      }
    }
}

function drowningFrog() {
  if (frog.y < 280 && frog.y > 40 && isDrowning) {
    alert('You drowned!!!!')
    level = 1;
    levelUpRight(cars)
    resetFrog();
  } else {
    isDrowning = true;
  }
}

function resetFrog() {
  frog.x = 280;
  frog.y = 560;
}

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  cars.laneOne.forEach(function (car) {
    car.draw().driveRight();
    collideCar(car);
  });
  cars.laneTwo.forEach(function (car) {
    car.drawLaneTwo().driveLeft();
    collideCar(car);
  });
  cars.laneThree.forEach(function (car) {
    car.drawLaneThree().driveRight();
    collideCar(car);
  });
  cars.laneFour.forEach(function (car) {
    car.drawLaneFour().driveLeft();
    collideCar(car);
  });
  cars.laneFive.forEach(function (car) {
    car.drawLaneFive().driveRight();
    collideCar(car);
  });
  logs.all.forEach(function(log) {
    log.forEach(function(e) {
      e.draw().floatRight();
      logTravel(e);
    })
  })
  turtles.all.forEach(function (turtle){
    turtle.forEach(function(e) {
      e.draw().swimLeft();
      turtleTravel(e);
    })
  });
  drowningFrog();
  win();
  frog.draw();
  requestAnimationFrame(gameLoop);
});

function win() {
  if (frog.y < 80) {
    level += 3;
    levelUpRight(cars)
    resetFrog();
  }
}

window.addEventListener('keydown', function(event) {
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

function levelUpRight(cars) {
  cars.allRight.forEach(function(vehicles) {
    vehicles.forEach(function(vehicle) {
      vehicle.speed = level;
    })
  })
}

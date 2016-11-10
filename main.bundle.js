/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var CarGenerator = __webpack_require__(1);
	var LogGenerator = __webpack_require__(3);
	var TurtleGenerator = __webpack_require__(5);
	var LilyPadsGenerator = __webpack_require__(7);
	var Frog = __webpack_require__(9);
	var canvas = document.getElementById('game');
	var context = canvas.getContext('2d');
	var frog = new Frog(280, 560, 40, 40, context);
	var car1 = document.getElementById('car1');
	var car2 = document.getElementById('car2');
	var car3 = document.getElementById('car3');
	var truck1 = document.getElementById('truck1');
	var truck2 = document.getElementById('truck2');
	var log1 = document.getElementById('log1');
	var turtle1 = document.getElementById('turtle1');
	var lilypad = document.getElementById('lilypad');
	var isDrowning = true;
	var turtleArrayOne = [];
	var turtleArrayTwo = [];
	var cars = new CarGenerator(context);
	var logs = new LogGenerator(context);
	var turtles = new TurtleGenerator(context);
	var lilypads = new LilyPadsGenerator(context);
	var level = 1;

	function collideCar(car) {
	  if (frog.x < car.x + car.width / 1.5 && frog.x + frog.width > car.x && frog.y < car.y + car.height && frog.height + frog.y > car.y) {
	    level = 1;
	    levelUpRight(cars);
	    resetFrog();
	    gameOver();
	  }
	}

	function logTravel(log) {
	  if (frog.x < log.x + log.width && frog.x + frog.width > log.x && frog.y < log.y + log.height && frog.height + frog.y > log.y) {
	    if (frog.x < 560) {
	      frog.x++;
	      isDrowning = false;
	    }
	  }
	}

	function turtleTravel(turtle) {
	  if (frog.x < turtle.x + turtle.width && frog.x + frog.width > turtle.x && frog.y < turtle.y + turtle.height && frog.height + frog.y > turtle.y) {
	    if (frog.x > 0) {
	      frog.x -= 2;
	      isDrowning = false;
	    }
	  }
	}

	function drowningFrog() {
	  if (frog.y < 280 && frog.y >= 0 && isDrowning) {
	    level = 1;
	    levelUpRight(cars);
	    resetFrog();
	    gameOver();
	  } else {
	    isDrowning = true;
	  }
	}

	function resetFrog() {
	  frog.x = 280;
	  frog.y = 560;
	}

	function win(lilypads) {
	  lilypads.forEach(function (lilypad) {
	    if (frog.x < lilypad.x + lilypad.width && frog.x + frog.width > lilypad.x && frog.y < lilypad.y + lilypad.height && frog.height + frog.y > lilypad.y) {
	      isDrowning = false;
	      resetFrog();
	      level += 3;
	      levelUpRight(cars);
	      addWinScreen();
	    }
	  });
	}

	function levelUpRight(cars) {
	  cars.allRight.forEach(function (vehicles) {
	    vehicles.forEach(function (vehicle) {
	      vehicle.speed = level;
	    });
	  });
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
	  logs.all.forEach(function (log) {
	    log.forEach(function (e) {
	      e.draw().floatRight();
	      logTravel(e);
	    });
	  });
	  turtles.all.forEach(function (turtle) {
	    turtle.forEach(function (e) {
	      e.draw().swimLeft();
	      turtleTravel(e);
	    });
	  });
	  lilypads.forEach(function (lilypad) {
	    lilypads.forEach(function (e) {
	      e.draw();
	    });
	  });
	  win(lilypads);
	  drowningFrog();
	  frog.draw();
	  requestAnimationFrame(gameLoop);
	});

	var startScreen = document.getElementById('start-screen');
	var startButton = document.getElementById('start-button');
	var winScreen = document.getElementById('win-screen');
	var gameOverScreen = document.getElementById('game-over-screen');
	var restartButton = document.getElementById('restart-button');
	var reloadButton = document.getElementById('reload-button');
	var nextLevel = document.getElementById('next-level-button');

	startButton.addEventListener('click', function () {
	  startScreen.style.display = 'none';
	  canvas.style.display = 'block';
	  canvas.style.visibility = 'visible';
	});

	restartButton.addEventListener('click', function () {
	  gameOverScreen.style.display = 'none';
	  canvas.style.display = 'block';
	  canvas.style.visibility = 'hidden';
	  window.location.reload();
	});

	reloadButton.addEventListener('click', function () {
	  gameOverScreen.style.display = 'none';
	  canvas.style.display = 'block';
	  canvas.style.visibility = 'hidden';
	  window.location.reload();
	});

	nextLevel.addEventListener('click', function () {
	  winScreen.style.visibility = 'hidden';
	  canvas.style.visibility = 'visible';
	});

	function displayCanvas() {
	  canvas.style.display = 'block';
	  canvas.style.visibility = 'visible';
	}

	function addWinScreen() {
	  winScreen.style.visibility = 'visible';
	  canvas.style.visibility = 'hidden';
	  startScreen.style.visiblility = 'hidden';
	}

	function gameOver() {
	  gameOverScreen.style.visibility = 'visible';
	  canvas.style.visibility = 'hidden';
	  startScreen.style.visibility = 'hidden';
	  winScreen.style.visibility = 'hidden';
	}

	window.addEventListener('keydown', function (event) {
	  // event.preventDefault();
	  if (event.keyCode === 38) {
	    frog.moveUp();
	  } else if (event.keyCode === 40) {
	    frog.moveDown();
	  } else if (event.keyCode === 37) {
	    frog.moveLeft();
	  } else if (event.keyCode === 39) {
	    frog.moveRight();
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Cars = __webpack_require__(2);

	function CarGenerator(context) {
	  this.laneOne = [];
	  this.laneTwo = [];
	  this.laneThree = [];
	  this.laneFour = [];
	  this.laneFive = [];
	  this.generateCars(this.laneOne, 0, 520, { minus: true, val: 180 }, context);
	  this.generateCars(this.laneTwo, 600, 480, { plus: true, val: 180 }, context);
	  this.generateCars(this.laneThree, 80, 440, { minus: true, val: 120 }, context);
	  this.generateCars(this.laneFour, 540, 400, { minus: true, val: 140 }, context);
	  this.generateCars(this.laneFive, 20, 360, { minus: true, val: 140 }, context);
	  this.allLeft = [this.laneTwo, this.laneFour];
	  this.allRight = [this.laneOne, this.laneThree, this.laneFive];
	}

	CarGenerator.prototype.generateCars = function (lane, x, y, instructions, ctx) {
	  [0, 1, 2].forEach(function (e) {
	    lane.push(new Cars(x, y, 60, 35, ctx));
	    if (instructions.minus) x -= instructions.val;
	    if (instructions.plus) x += instructions.val;
	  });
	};

	module.exports = CarGenerator;

/***/ },
/* 2 */
/***/ function(module, exports) {

	function Cars(x, y, width, height, context) {
	  this.x = x;
	  this.y = y;
	  this.width = width;
	  this.height = height;
	  this.context = context;
	  this.speed = 2;
	}

	Cars.prototype.draw = function () {
	  this.context.drawImage(car1, this.x, this.y, this.width, this.height);
	  return this;
	};

	Cars.prototype.drawLaneTwo = function () {
	  this.context.drawImage(truck1, this.x, this.y, this.width, this.height);
	  return this;
	};

	Cars.prototype.drawLaneThree = function () {
	  this.context.drawImage(car2, this.x, this.y, this.width, this.height);
	  return this;
	};

	Cars.prototype.drawLaneFour = function () {
	  this.context.drawImage(truck2, this.x, this.y, this.width, this.height);
	  return this;
	};

	Cars.prototype.drawLaneFive = function () {
	  this.context.drawImage(car3, this.x, this.y, this.width, this.height);
	  return this;
	};

	Cars.prototype.driveRight = function () {
	  if (this.x > 600) {
	    this.x = -60;
	  }
	  return this.x += this.speed;
	};

	Cars.prototype.driveLeft = function () {
	  if (this.x < 0) {
	    this.x = 660;
	  }
	  return this.x -= this.speed;
	};

	module.exports = Cars;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Logs = __webpack_require__(4);

	var LogGenerator = function (context) {
	  this.one = [];
	  this.two = [];
	  this.three = [];
	  this.one.push(new Logs(0, 240, 100, 35, context));
	  this.one.push(new Logs(-200, 240, 100, 35, context));
	  this.one.push(new Logs(-400, 240, 100, 35, context));
	  this.two.push(new Logs(0, 160, 300, 35, context));
	  this.three.push(new Logs(-100, 80, 100, 35, context));
	  this.three.push(new Logs(-360, 80, 100, 35, context));
	  this.three.push(new Logs(-560, 80, 100, 35, context));
	  this.all = [this.one, this.two, this.three];
	};

	module.exports = LogGenerator;

/***/ },
/* 4 */
/***/ function(module, exports) {

	function Logs(x, y, width, height, context) {
	  this.x = x;
	  this.y = y;
	  this.width = width;
	  this.height = height;
	  this.context = context;
	}

	Logs.prototype.draw = function () {
	  this.context.fillStyle = 'rosybrown';
	  this.context.drawImage(log1, this.x, this.y, this.width, this.height);
	  return this;
	};

	Logs.prototype.floatRight = function () {
	  if (this.x > 600) {
	    this.x = -300;
	  }
	  return this.x++;
	};

	module.exports = Logs;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Turtles = __webpack_require__(6);

	var TurtleGenerator = function (context) {
	  this.one = [];
	  this.two = [];
	  this.three = [];
	  this.one.push(new Turtles(200, 200, 50, 35, context));
	  this.one.push(new Turtles(260, 200, 50, 35, context));
	  this.one.push(new Turtles(320, 200, 50, 35, context));
	  this.one.push(new Turtles(500, 200, 50, 35, context));
	  this.one.push(new Turtles(560, 200, 50, 35, context));
	  this.one.push(new Turtles(620, 200, 50, 35, context));
	  this.two.push(new Turtles(390, 120, 50, 35, context));
	  this.two.push(new Turtles(450, 120, 50, 35, context));
	  this.two.push(new Turtles(510, 120, 50, 35, context));
	  this.two.push(new Turtles(690, 120, 50, 35, context));
	  this.two.push(new Turtles(750, 120, 50, 35, context));
	  this.two.push(new Turtles(820, 120, 50, 35, context));
	  this.three.push(new Turtles(200, 40, 50, 35, context));
	  this.three.push(new Turtles(260, 40, 50, 35, context));
	  this.three.push(new Turtles(320, 40, 50, 35, context));
	  this.three.push(new Turtles(500, 40, 50, 35, context));
	  this.three.push(new Turtles(560, 40, 50, 35, context));
	  this.three.push(new Turtles(620, 40, 50, 35, context));
	  this.all = [this.one, this.two, this.three];
	};

	module.exports = TurtleGenerator;

/***/ },
/* 6 */
/***/ function(module, exports) {

	function Turtles(x, y, width, height, context) {
	  this.x = x;
	  this.y = y;
	  this.width = width;
	  this.height = height;
	  this.context = context;
	  this.speed = 2;
	}

	Turtles.prototype.draw = function () {
	  this.context.drawImage(turtle1, this.x, this.y, this.width, this.height);
	  return this;
	};

	Turtles.prototype.swimLeft = function () {
	  if (this.x < -50) {
	    this.x = 680;
	  }
	  return this.x -= this.speed;
	};

	module.exports = Turtles;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var LilyPad = __webpack_require__(8);

	var LilyPadsGenerator = function (context) {
	  this.one = [];
	  this.one.push(new LilyPad(5, 0, 60, 40, context));
	  this.one.push(new LilyPad(137, 0, 60, 40, context));
	  this.one.push(new LilyPad(269, 0, 60, 40, context));
	  this.one.push(new LilyPad(401, 0, 60, 40, context));
	  this.one.push(new LilyPad(533, 0, 60, 40, context));
	  return this.one;
	};

	module.exports = LilyPadsGenerator;

/***/ },
/* 8 */
/***/ function(module, exports) {

	function LilyPad(x, y, width, height, context) {
	  this.x = x;
	  this.y = y;
	  this.width = width;
	  this.height = height;
	  this.context = context;
	}

	LilyPad.prototype.draw = function () {
	  this.context.drawImage(lilypad, this.x, this.y, this.width, this.height);
	  return this;
	};

	module.exports = LilyPad;

/***/ },
/* 9 */
/***/ function(module, exports) {

	function Frog(x, y, width, height, context) {
	  this.x = x;
	  this.y = y;
	  this.width = width;
	  this.height = height;
	  this.context = context;
	}

	var frogger = document.getElementById('frog');

	Frog.prototype.draw = function () {
	  this.context.fillStyle = 'green';
	  this.context.drawImage(frogger, this.x, this.y, this.width, this.height);
	};

	Frog.prototype.moveRight = function () {
	  if (this.canMoveRight()) {
	    this.x += 40;
	  }
	};

	Frog.prototype.moveUp = function () {
	  if (this.canMoveUp()) {
	    this.y -= 40;
	  }
	};

	Frog.prototype.moveDown = function () {
	  if (this.canMoveDown()) {
	    this.y += 40;
	  }
	};

	Frog.prototype.moveLeft = function () {
	  if (this.canMoveLeft()) {
	    this.x -= 40;
	  }
	};

	Frog.prototype.canMoveUp = function () {
	  return this.y > 0;
	};

	Frog.prototype.canMoveRight = function () {
	  return this.x < 600 - this.width;
	};

	Frog.prototype.canMoveDown = function () {
	  return this.y < 600 - this.height;
	};

	Frog.prototype.canMoveLeft = function () {
	  return this.x > 0;
	};

	module.exports = Frog;

/***/ }
/******/ ]);
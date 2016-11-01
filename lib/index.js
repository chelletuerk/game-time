var blocks = [];

blocks.push(new Block(50, 50, 20, 20));

canvas.addEventListener('click', function(event) {
  var click = getClickPosition(event);
  blocks.push(new Block(click.x, click.y, 20, 20));
});

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  blocks.forEach(function(block) {block.draw().move(); });
  requestAnimationFrame(gameLoop);
block.draw()
block.move()
});

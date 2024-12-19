let shootingStars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(12, 20, 69, 25); // Faint trail effect
  drawStars();
  drawShootingStars();
}

// Create static stars
function drawStars() {
  for (let i = 0; i < 150; i++) {
    fill(255, random(150, 255)); // Varying brightness
    ellipse(random(width), random(height), 2, 2);
  }
}

// Create and animate shooting stars
function drawShootingStars() {
  if (random(1) < 0.01) {
    shootingStars.push(new ShootingStar());
  }

  for (let star of shootingStars) {
    star.update();
    star.show();
  }

  shootingStars = shootingStars.filter(star => !star.isOffScreen());
}

// Shooting star class
class ShootingStar {
  constructor() {
    this.x = random(width);
    this.y = random(height / 2); // Start from the top half
    this.xSpeed = random(5, 10);
    this.ySpeed = random(5, 10);
    this.alpha = 255;
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.alpha -= 5; // Fade out
  }

  show() {
    fill(255, this.alpha);
    ellipse(this.x, this.y, 5, 5);
    fill(255, this.alpha / 2);
    ellipse(this.x - 10, this.y - 10, 10, 10); // Trail effect
  }

  isOffScreen() {
    return this.x > width || this.y > height || this.alpha <= 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

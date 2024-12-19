function setup() {
  // Create screen reader accessible description
  textOutput();

  createCanvas(720, 400);
  angleMode(DEGREES);

  // CSS color name
  // For a list of available color names, see:
  // https://www.w3.org/wiki/CSS/Properties/color/keywords
  background(75, 0, 130);

  strokeWeight(2);
  stroke(199, 21, 133);

  // The default color mode uses
  // Red, green, and blue values
  // On a scale of 0-255

  fill(72, 209, 204);

  stroke(147, 112, 219);
  triangle(30, 75, 58, 20, 86, 75);
  stroke(147, 112, 219);
  triangle(90, 15, 40, -20, 12, 95);

  stroke(199, 21, 133);

  // The rectangle uses the last set fill color,

  rect(100, 20, 200, 100, 20);

  // Hue, saturation, and brightness values
  // On scales of 0-360°, 0-100%, and 0-100% respectively
  colorMode(HSB);

  fill(0, 0, 100);

  stroke(100, 100, 0);
  ellipse(540, 100, 300, 100);

  fill(20, 70, 60);

  // Draw without lines
  stroke(0, 100, 100);
  blendMode(DIFFERENCE);
  circle(560, 300, 300);

  // Hue, saturation, and lightness values
  // On scales of 0-360°, 0-100%, and 0-100% respectively
  // This is similar to HSB (above),
  // but whereas 100% brightness is the brightest version of that hue,
  // 100% lightness is always white.
  colorMode(HSL);

  fill(200, 20, 50);

  stroke(120, 90, 30);
  arc(540, 100, 300, 100, 180, 360, CHORD);

  // Save current settings
  push();

  // Switch back to red, green, blue color mode
  colorMode(RGB);

  stroke(219, 112, 147);
  strokeWeight(5);
  strokeJoin(BEVEL);
  line(20, 200, 200, 200);
  line(20, 200, 200, 250);
  line(20, 200, 200, 300);
  line(50, 100, 100, 50);
  line(20, 200, 200, 350);

  // Restore last saved settings
  pop();

  // Because the color settings were saved after drawing the arc
  // and then restored before drawing the triangle,
  // the triangle uses the same settings as the arc

  ellipseMode(CORNER);
  fill(255);
  ellipse(225, 225, 250, 250);

  ellipseMode(CORNERS);
  fill(100);
  ellipse(225, 225, 250, 250);

  // Hex string
  // This is a set of red, green, blue values
  // Encoded in base 16
  stroke("#cfa49a");

  // Draw without inner color
  noFill();
  quad(150, 162, 186, 150, 150, 138, 114, 150);
}
// A HTML range slider
var slider;
var img;

function setup() {
  createCanvas(720, 400);
  // hue, saturation, and brightness
  colorMode(HSB, 255);
  // slider has a range between 0 and 255 with a starting value of 127
  colorSlider = createSlider(0, 255, 127);
  sizeSlider = createSlider(0, 400, 50);
  xposSlider = createSlider(0, 720, width/2);
  yposSlider = createSlider(0, 400, height/2);

}

function draw() {
  background(127);
  strokeWeight(2);

  //TEXT
  text("Digital Art Crew");

  // Set the hue according to the slider
  stroke(colorSlider.value(), 255, 255);
  fill(colorSlider.value(), 255, 255, 127);
  rect(xposSlider.value(), yposSlider.value(), sizeSlider.value(), 200);
}
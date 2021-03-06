// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

var cols, rows;
var scl = 20;
var w = 2000;
var h = 1600;

var flying = 0;

var terrain =[[]];

function setup() {
  createCanvas(600, 600);
  cols = w / scl;
  rows = h/ scl;
}


function draw() {

  flying -= 0.1;

  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    terrain.push([]);
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[y].push( map(noise(xoff, yoff), 0, 1, -100, 100));
      xoff += 0.2;
    }
    yoff += 0.2;
  }



  background(0);
  stroke(255);
  noFill();

  translate(width/2, height/2+50);
  rotateX(PI/3);
  translate(-w/2, -h/2);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
      //rect(x*scl, y*scl, scl, scl);
    }
    endShape();
  }
}
let w = 500;
let h = 500;
let n1, n2, n3;
let z1, z2, z3;

function setup() {
  var canvas = createCanvas(w, h);
  canvas.parent('simpledots-holder');
  
  let r = random(120,230);
  let g = r - random(45, 80);
  let b = g - random(35,45);
  background(r, g, b);
  
  
  n1 = random(20, w-20);
  n2 = random(20, w-20);
  n3 = random(20, w-20);
  z1 = random(20, w-20);
  z2 = random(20, w-20);
  z3 = random(20, w-20);
  
  let pointsList = [
    n1,
    n2,
    n3,
    z1, 
    z2,
    z3
  ];
  let points = random(pointsList);
}

function draw() {
  
  
  
  
  stroke(0);
  strokeWeight(5);
  
  point(n1, z1);
  point(n1, z2);
  point(n1, z3);
  point(n2, z1);
  point(n2, z2);
  point(n2, z3);
  point(n3, z1);
  point(n3, z2);
  point(n3, z3);
  
  point(n1, n1);
  point(n1, n2);
  point(n1, n3);
  point(n2, n1);
  point(n2, n2);
  point(n2, n3);
  point(n3, n1);
  point(n3, n2);
  point(n3, n3);
  
  point(z1, n1);
  point(z1, n2);
  point(z1, n3);
  point(z2, n1);
  point(z2, n2);
  point(z2, n3);
  point(z3, n1);
  point(z3, n2);
  point(z3, n3);
  
  point(z1, z1);
  point(z1, z2);
  point(z1, z3);
  point(z2, z1);
  point(z2, z2);
  point(z2, z3);
  point(z3, z1);
  point(z3, z2);
  point(z3, z3);
  
  
}

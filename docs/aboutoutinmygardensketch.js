// code adapted from Jacob Rivkin
// https://www.youtube.com/watch?v=hxjEl-pun7o

// GLOBAL VARIABLES

let textures = []; // CREATE AN EMPTY ARRAY TO STORE VARIABLES
let portals = []; // CREATE AN EMPTY ARRAY TO STORE VARIABLES
let numTextures = 11;
let tx1, tx2, tx3, tx4, tx5, tx6, tx7;
let p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15;
let blend;
let colourValue, tf1, tf2, tf3, ts1, ts2, ts3;
let fontSize;
let w = window.innerWidth;
let h = window.innerHeight;


//LOAD IMAGES BEFORE THE PROGRAM RUNS
function preload() {
  
  //least efficient way, but most straightforward way
  // store image in a variable
  
  //loading texture images
  tx1 = loadImage('tx01.jpg');
  tx2 = loadImage('tx02.jpg');
  tx3 = loadImage('tx03.JPG');
  tx5 = loadImage('tx05.JPG');
  tx4 = loadImage('tx04.JPG');
  tx6 = loadImage('tx06.JPG');
  tx7 = loadImage('tx07.JPG');
  tx8 = loadImage('tx08.jpg');
  tx9 = loadImage('tx09.jpg');
  tx10 = loadImage('tx10.jpg');
  tx11 = loadImage('tx11.jpg');
  tx12 = loadImage('tx12.jpg');
  textures = [tx1,tx2,tx3,tx4,tx5,tx6,tx7, tx8, tx9, tx10, tx11, tx12]; // store variables in an array, see top
  
  //loading portal drawings
  p1 = loadImage('joshportal.jpeg');
  p2 = loadImage('joshportal2.jpeg');
  p3 = loadImage('minnaportal.JPG');
  p4 = loadImage('clareportal.JPG');
  p5 = loadImage('daveportal.jpeg');
  p6 = loadImage('honeybeeportal.JPG');
  p7 = loadImage('liamportal.JPG');
  p8 = loadImage('seamusportal.JPG');
  p9 = loadImage('alanaportal.JPG');
  p10 = loadImage('myportal.JPG');
  p11 = loadImage('phoenixportal.JPG');
  p12 = loadImage('rubyportal.JPG');
  p13 = loadImage('squeakportal.JPG');
  p14 = loadImage('zoeportal.JPG');
  p15 = loadImage('baileyportal.JPG');
  portals = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15];
  
  
// // // the most efficient way using a for loop and concatenation
// for (let i = 0; i < numCards; i++) {
// // // store each image directly into the array
// // // you must use the naming convention demonstrated - 0,1,2,3
// cards[i] = loadImage('card' + i + '.png');
// console.log();
// }
  
}

// ACTUAL SKETCH BELOW
function setup() {
  createCanvas(w, h);
  noLoop();

  background(255);
  
  //draw the image from the center of the image
  imageMode(CENTER);
  // image(img, 10, 10, 50, 50);
  layer1 = random(textures);
  layer2 = random(textures);
  layer3 = random(textures);
  layer4 = random(textures);
  layer5 = random(textures);
  portal = random(portals);
  blend = [ADD, DARKEST, LIGHTEST, DIFFERENCE, EXCLUSION, MULTIPLY, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN];
  rB1 = random(blend)
  rB2 = random(blend)
  rB3 = random(blend)
  topBlend = [ADD, DIFFERENCE, EXCLUSION, SCREEN, OVERLAY, SOFT_LIGHT, LIGHTEST];
  tB1 = random(topBlend);
  tB2 = random(topBlend);
  portalBlend = [ADD, LIGHTEST, DIFFERENCE, EXCLUSION, OVERLAY, SOFT_LIGHT];
  pB = random(portalBlend);
  //store random image in a variable
  //let randoImg = random(textures)
  //the array is put into the random function, it will choose one index value at random
  
  //text colour randomisation
  tf1 = random(0, 255);
  tf2 = random(0, 255);
  tf3 = random(0, 255);
  ts1 = random(0, 255);
  ts2 = random(0, 255);
  ts3 = random(0, 255);
  
  //text size adjusting
  fontSize = h/30;
  
  //draw to the canvas using the random
  //image(image, x position, y position, image width, image height)
  image(layer1, w/2, h/2, w, h);
  blendMode(rB1);
  image(layer2, w/2, h/2, w, h);
  blendMode(rB2);
  image(layer3, w/2, h/2, w, h);
  blendMode(rB3);
  image(layer4, w/2, h/2, w, h);
  blendMode(tB1);
  image(layer5, w/2, h/2, w, h);
  
  blendMode(pB);
    fill(255);
  rect(0, 0, w, h);
    
    let artistStatement = ['"Out In My Garden" (2023) is an internet artwork inspired by an anonymous submission to a previous work, “Blueprints” (2023). It interrogates powerful collective feelings of longing and hope for the inaccessible, presenting a speculative world in which transportational portals have spontaneously appeared globally. Their fantasy and sci-fi implications interrogate popular perceptions of utopia as an unattainable, mythical destination, while encouraging the audience to indulge in imagination and fancy.\nPortals symbolise digital spaces as interconnective stages for emotional connection and social productivity, exploring the positive potential of a post-capitalist globalised world, nurturing the internet into a realm of utopic possibility. The work appropriates various online textual forms and aesthetics (personal blogs, government forms, and clickbait), glorifying the construction and exploration of maximalist digital spaces. Euphoric digital collages hinder legibility, playing on utopia’s inaccessibility, mirroring the fluctuating clarity of visions of the future.\nThe site generates randomly upon each reload, providing unique journeys to each viewer progressing through the work, becoming a portal in and of itself.\n\nAcknowledgements\nThank you to Clare Todorovitch, Joshua Smith, Minna Squire, Honeybee O’Gee, Phoenix O’Connell, Ruby Kingham, Alana Hunt, Zoe Davis, Sarah Davis, Seamus Burne, David Bulger and Bailey Ayre for submitting drawings of your portals <3']
  
    blendMode(BLEND);
    fill(tf1, tf2, tf3);
    stroke(ts1, ts2, ts3);
    textFont('Times New Roman');
    textSize(fontSize);
    text(artistStatement, w/12, h/12, w/12*10)

}

function draw() {
  
}

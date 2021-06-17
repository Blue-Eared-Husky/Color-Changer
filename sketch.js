var red_btn, blue_btn, grn_btn;
var r = 0,g = 0,b = 0;

function setup(){
  createCanvas(400,400);

  red_btn = createButton("RED");
  red_btn.position(80,100);
  red_btn.mousePressed(red_function);

  blue_btn = createButton("BLUE");
  blue_btn.position(180,100);
  blue_btn.mousePressed(blue_function);

  grn_btn = createButton("GREEN");
  grn_btn.position(280,100);
  grn_btn.mousePressed(green_function);

  random_btn = createButton("RANDOM");
  random_btn.position(170,300);
  random_btn.mousePressed(random_function);
}

function draw(){
  background(r,g,b);
}

function red_function(){
  r = 255;
  g = 0;
  b = 0;
}

function blue_function(){
  r = 0;
  g = 0;
  b = 255;
}

function green_function(){
  r = 0;
  g = 255;
  b = 0;
}

function random_function(){
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
}
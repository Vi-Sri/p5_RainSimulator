var drops = [];

function setup() {
  createCanvas(640, 360);
  
  for(var i = 0; i< 100; i++) {
    drops[i] = new purpleDrop();
  }
}

function draw() {
  background(31);
  for(var i = 0; i < 100; i++){
      drops[i].fall();
      drops[i].show();
  }
}

purpleDrop = function() {
  this.x = random(width);
  this.y = random(-500, -100);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 1, 20);
  this.numDroplets = random(20, 30);
  this.splashdrops = [];

  this.fall = function () {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
        this.splash();
        this.y = random(-200, -100);
        this.yspeed = map(this.z, 0, 20, 4, 10);
    }

  }
  
  this.splash = function() {
     for(var i=0; i< this.numDroplets; i++) {
         this.splashdrops[i] = new splashDrop(this.x, this.y);
         this.splashdrops[i].show();
     }
  }
  
  this.show = function () {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(138, 43, 226);
    line(this.x, this.y, this.x, this.y + this.len);
    
  }
}

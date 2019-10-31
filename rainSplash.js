splashDrop = function(x,y) {
  this.x = x;
  this.y = y;   
  this.splashRadius = random(10,20);
  
  this.show = function(){
     circle(random(
              this.x-this.splashRadius,this.x+this.splashRadius), 
            random(this.y-this.splashRadius,this.y+this.splashRadius),
            3);
  }
}

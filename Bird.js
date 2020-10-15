class Bird extends BaseClass {
constructor(x,y){
  super(x,y,50,50);
  this.image = loadImage("sprites/bird.png");
  this.smokeImg = loadImage("sprites/smoke.png");
  this.array1 = [];}

display() {
  super.display();
  if(this.body.velocity.x>4 && this.body.position.x>200){
  var position = [this.body.position.x,this.body.position.y];
  this.array1.push(position);}
  for(var i=0; i<this.array1.length; i=i+1){
  image(this.smokeImg, this.array1[i][0],this.array1[i][1]);}}}
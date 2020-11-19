var wall,thicknesss;
var bullet,speed,weight;
var bulletImage;

function preload(){
  bulletImage=loadImage("bullet2.jpg")
}
 
function setup() {
  createCanvas(1200,400);

  bullet=createSprite(50,200,50,50);
  bullet.addImage("fire", bulletImage);
  bullet.scale=0.3;

  thickness=random(22,83);
  wall=createSprite(1100,200,thickness,height/2);
  wall.shapeColor="yellow";

  speed=random(223,321);
  weight=random(30,52);
}

function draw() {  
  background(250);
  drawSprites();
 
  bullet.velocityX=speed;

  //customize
  //hascollided();

  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor="red";
    }

    if(damage<10){
      wall.shapeColor="green"
    }
  }
}

function hascollided(ob1,ob2){

  bulletRightEdge=ob1.x+ob1.width;
  wallLeftEdge=ob2.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}
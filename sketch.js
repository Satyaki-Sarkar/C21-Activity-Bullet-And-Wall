var bullet,wall;
var speed,weight,thickness,damage;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50, 200, 50, 10);
  bullet.velocityX=speed;

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background("Black");

  if(hasCollided(bullet,wall)){
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor="Red";
    }else if (damage<=10){
      wall.shapeColor="Green";
    }
  }
  
  drawSprites();
}

function hasCollided(object1,object2){
  object1RightEdge=object1.x;
  object2LeftEdge=object2.x+object2.width;
  if(object1RightEdge>=object2LeftEdge){
    object1.velocityX=0;
    object2.velocityX=0;
    return true;
  } else {
    return false;
  }
}



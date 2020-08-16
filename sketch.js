var wall;
var thickness;
var bullet;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);

  //car=createSprite(50, 200, 50, 50);

  wall=createSprite(1200,200,thickness,height/2);

  //bullet.shapeColor = "green";


  speed=random(55,90);
  weight=random(400,150);
  thickness=random(22,83);

  //car.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  background("black"); 

  funcition hasCollided ();
}


funcition hasCollided(Lbullet,Lwall)
{
  bulletRightEdge=1bullet.x +1bullet.width;
  wallLeftEdge=1wall.x;
  if (bulletRightEdge>=wallLeftEdge)
}
   return true
}
return false; 

if(hasCollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);
 if(damage>10)
 { 
   wall.shapeColor=color(255,0,0);
 }



 if(damage<10)
 {
    
     wall.shapeColor=color(0,255,0);
 }
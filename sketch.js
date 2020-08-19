var wall;
var thickness;
var bullet;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);

  bullet=createSprite(50, 200, 50, 50);

  wall=createSprite(1200,200,thickness,height/2);

  //bullet.shapeColor = "green";


  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

 bullet.velocityX = speed;
}

function draw() {
  background("black"); 
  
if (hasCollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);
 if(damage>10)
 { 
   wall.shapeColor = "red";
 }



 if(damage<10)
 {
    
     wall.shapeColor= "green";
 }
}


function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
{
   return true
}
return false; 
}
}
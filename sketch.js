var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1500, 200, 60, height/2);
  car = createSprite (50,200,50,50)

  speed = random (55,90);
  weight = random (400,1500);

  car.velocityX = speed;

 

}

function draw() {
  background(255,255,255); 
  
  if (wall.x - car.x < (car.width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if (deformation  > 180)
    {
      car.shapeColor = color (255,0,0)
    }
    if ( deformation < 180 && deformation > 100) 
    {
      car.shapeColor = color(230,230,0)
    }
    if (deformation < 100) 
    {
      car.shapeColor = color (0,255,0)
    }
  }
  fill("black")
  textSize(15)
  text("Im SORRY",600,50)
  text("<miss(i wasn't satisfied with my projects and i satarted forgetting visual code so i re coded all the projects from start without anyones help and now i am able to do it ) i will submit 3-4 project every day then take a class>",5,70)
  console.log(car.velocityX)

  drawSprites();
}
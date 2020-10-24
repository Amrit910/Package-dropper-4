var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1, box2, box3;
box1.shapeColor("red");
box2.shapeColor("red");
box3.shapeColor("red");

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1Sprite=createSprite(width/20, height/200, 253, 377);
	box2Sprite=createSprite(width/200, height/20, 199, 379);
	box3Sprite=createSprite(width/20, height/200, 131, 373);
	
	Matter.body.setStatic(box1, false);
	Matter.body.setStatic(box2, false);
	Matter.body.setStatic(box3, false);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y; 
  box1Sprite.x= box1Body.position.x;
  box1Sprite.y= box1Body.position.y;
  box2Sprite.x= box2Body.position.x;
  box2Sprite.y= box2Body.position.y;
  box3Sprite.x= box3Body.position.x;
  box3Sprite.x= box3Body.position.y

  console.log(package.body.x);
  console.log(package.body.y);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  Matter.Body.setStatic(package,false);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  package.Velocity.y= -3
  }
}

package.display();
box1.display();
box2.display();
box3.display(); 
helicopter.display();



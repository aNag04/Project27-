
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}
bobObject1 = new Bob(80,200,30,30);
bobObject2 = new Bob(110,200,30,30);
bobObject3 = new Bob(140,200,30,30);
bobObject4 = new Bob(170,200,30,30);
bobObject5 = new Bob(200,200,30,30);

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




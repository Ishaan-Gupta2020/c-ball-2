
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,dustbin,dustbin1,dustbin2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,650);
	ground = new Ground(800,670,1600,20);
	dustbin = new Dustbin(450,650,150,20);
	dustbin1 = new Dustbin(520,580,20,150);
	dustbin2 = new Dustbin(380,580,20,150);

	

  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine);
 
  ground.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();
  paper.display();

  
}
  function keyPressed(){
  
      if(keyCode=== UP_ARROW){
          Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-75})
      }

  
  
 



}


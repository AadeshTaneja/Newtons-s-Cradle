
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(480,200);

	ob1 = new Bob(400,400);
	 ob2 = new Bob(440,400);
	ob3 = new Bob(480,400);
	ob4 = new Bob(520,400);
	ob5 = new Bob(560,400);

	rope = new Rope(ob1.body,roof.body,-80,0);
	rope2 = new Rope(ob2.body,roof.body,-40,0);
	rope3 = new Rope(ob3.body,roof.body,0,0);
	rope4 = new Rope(ob4.body,roof.body,40,0);
   rope5 = new Rope(ob5.body,roof.body,80,0);
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  roof.display();
  ob1.display();
  ob2.display(); 
 ob3.display();
  ob4.display();
  ob5.display();
  rope.display();
  rope2.display();  
 rope3.display();
 rope4.display();  
  rope5.display();

 
    
  
  
  
 
}

function keyPressed(){

	
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(ob1.body,ob1.body.position,{x:-9, y:9});
	}
	
	}



const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world,body;
function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world= engine.world;

 


  body=Bodies.rectangle(400,390,800,20,{isStatic:true});
  World.add(world,body);

var ball1={
restitution:1.0


}

  ball=Bodies.circle(300,200,20,ball1);
  World.add(world,ball);

  console.log(ball);
  console.log(body.position.x);
  console.log(body.position.y);
}

function draw() {
  Engine.update(engine);
  background(0); 
  rectMode(CENTER);
  rect(body.position.x,body.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,20);
  
  
}
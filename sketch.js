const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ground;
var ball;
function setup() {
  createCanvas(400,400);
  
  //creating the engine
  engine = Engine.create();

  //adding world to the engine
  world = engine.world;

  //change attribute
  //isStatic - true - not moving, false - moving

  var option = { 
    isStatic:true
  }

  //Create a rectangular body (x,y,w,h)
  ground= Bodies.rectangle(200,390,200,20,option);

  //Add it to the world
  World.add(world,ground);

  var option2={
    restitution:1
  }
 ball= Bodies.circle(200,100,20,option2);
 World.add(world,ball)
}

function draw() {
  background(0);  
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20,20);

}

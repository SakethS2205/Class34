const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg;
var ball, slingshot;




function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,380,1200,20);
  box1 = new Box(700,200,70,70);
  box2 = new Box(700,150,70,70);
  box3 = new Box(700,100,70,70);
  box4 = new Box(700,50,70,70);
  box5 = new Box(700,10,70,70);
  ball = new Ball(400, 200, 50);
  rope = new Slingshot(ball.body, {x:400, y:50});

}

function draw() {
  background("green");  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ball.display();
  rope.display();
  
}

function mouseDragged(){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}



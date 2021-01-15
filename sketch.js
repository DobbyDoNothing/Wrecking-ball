const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,700);
  engine= Engine.create();
  world= engine.world;

  ground= new Ground(400,580);
  ball= new Ball(300,200);
  rope= new Rope (ball.body,{x: 300,y:50}) 

  box1= new Box(350,500);
  box2= new Box(350,400);
  box3= new Box(350,300);
  box4= new Box(350,200);
  box5= new Box(350,100);

  box6= new Box(400,500);
  box7= new Box(400,400);
  box8= new Box(400,300);
  box9= new Box(400,200);
  box10= new Box(400,100);
}

function draw() {
  background("lightblue");  
  Engine.update(engine);
  ground.display();
  ball.display();
  rope.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
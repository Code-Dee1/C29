const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground;
var fruit, fruitCon
var rope

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  var fruitoptions = {
    density:0.001
  }
  fruit = Bodies.circle(200,200,30,fruitoptions)
  World.add(world,fruit)
 
  fruitCon=new Link(rope,fruit)
  ground= new Ground(200,690,600,20)
  rope= new Rope(6,{x:245,y:30})
  Matter.Composite.add(rope.body,fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.display()
  ellipse (fruit.position.x, fruit.position.y,30,30)
  rope.show()
   
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon, box, ground;
var engine, world;
var background;
var ball = [];
var box,box2,box3;


function preload()
{

}


function setup()
{
var canvas = createCanvas(1000,400);
engine = Engine.create();
world = World.engine;
//box =createSprite(20,20,20,20);
//box = new Box(100,100,20,20);

box2 = new Ground(200,100,200,30);
/*for(var a = 0; a < 300; a = a+20)
{
ball.push(new Box(a,100,20,20));
} */
} 

function draw()
{
background(0);

//Engine.update();
//box.display();
box2.display();
   /*for(i=0;i<ball.length;i++)
   {
       ball[i].display();
   } */
}
 
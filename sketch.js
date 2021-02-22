
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var bin1, bin2, binIMG;

function preload(){
binIMG=loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

 ball = new Ball(100, 645, 20);
bin1= new Dustbin(600,600,10,140);
bin2= new Dustbin(780,600,10,140);

ground = new Ground(width/2,height-20,1200,30);


  
}


function draw() {
  background("white");
  image(binIMG,590,520,200,150);
  Engine.update(engine);

 ball.display();
 bin1.display();
 bin2.display();
 ground.display();

}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-90})
  }
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2,ground3,ground4;
var holder;
var box1;
var ball;
var slingshot;
var polygonIMG;
var backgroundIMG;
var bg="bg1.png";

var score =0; 

function preload()
{
   polygonIMG=loadImage("yellow.png");
   backgroundIMG = loadImage("bg1.jpg");
}

function setup() {
  createCanvas(1200,800);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  //ball = createSprite(100,200,20)

  ground1 = new Ground(500,520,250,20);
  ground2 = new Ground(900,250,250,20);
  ground3 = new Ground(600,750,1200,20);
  //ground4 = new Ground(80,600,20,10);

  box1 = new Box(410,500,30,40);
  box2 = new Box(440,500,30,40);
  box3 = new Box(470,500,30,40);
  box4 = new Box(500,500,30,40);
  box5 = new Box(530,500,30,40);
  box6 = new Box(560,500,30,40);
  box7 = new Box(590,500,30,40);

  box8 = new Box(440,460,30,40);
  box9 = new Box(470,460,30,40);
  box10 = new Box(500,460,30,40);
  box11 = new Box(530,460,30,40);
  box12 = new Box(560,460,30,40);

  box13 = new Box(470,420,30,40);
  box14 = new Box(500,420,30,40);
  box15 = new Box(530,420,30,40);

  box16 = new Box(500,380,30,40);

  box17 = new Box(840,225,30,40);
  box18 = new Box(870,225,30,40);
  box19 = new Box(900,225,30,40);
  box20 = new Box(930,225,30,40);
  box21 = new Box(960,225,30,40);

  box22 = new Box(870,185,30,40);
  box23 = new Box(900,185,30,40);
  box24 = new Box(930,185,30,40);

  box25 = new Box(900,145,30,40);

  ball = Bodies.circle(80,530,20);
  World.add(world,ball);

  slingshot = new SlingShot(ball,{x:80,y:530});

  

  Engine.run(engine);
}

function draw() {
  if(backgroundIMG)
  background(backgroundIMG); 
  fill("red");
  textSize(35);
  text("SCORE :" +score,500,60);
  //rectMode(CENTER);
  //Engine.update(engine);


  ground1.display();
  ground2.display();
  ground3.display();
  //ground4.display();
  // ball.display();
  
  fill("lightgreen");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("lightblue");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("pink")
  box13.display();
  box14.display();
  box15.display();
  fill("orange");
  box16.display();
  fill("lightgreen");
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  fill("lightblue");
  box22.display();
  box23.display();
  box24.display();
  fill("pink");
  box25.display();


  

  imageMode(CENTER)
  image(polygonIMG ,ball.position.x,ball.position.y,40,40);

  slingshot.display();

  //score.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();


   
  //drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}


function keyPressed(){
  if(keyCode===32){
      slingshot.attach(this.ball);
      
  }
}
async function getBackgroundImg(){
  var response= await fetch ("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var responseJSON= await response.json();
  var datetime = responseJSON.datetime;
  var hour= datetime.slice(11,13);

  if(hour>=06 && hour<=19){
      bg="bg1.jpg";

  }
  else {
      bg= "bg.jpg";
  }
  backgroundIMG=loadImage(bg);
  console.log(backgroundIMG)
}

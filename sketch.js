var trex, trex_running, edges;
var groundImage,ground2Image;
var ground;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  ground2Image = loadImage ("ground1.png");
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,140,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50;
  
  //create ground
  ground = createSprite (300,190,600,10);
  ground.velocityX = -5;
  ground.x = ground.width/2;
  ground.addImage ("ground1",groundImage);
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(ground);
  
  //reseting the ground
  if (ground.x<0){
      ground.x = ground.width/2;
      }
  
  drawSprites();
}
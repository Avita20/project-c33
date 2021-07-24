var snow_img,snow1;
var snow,snow2,snow3, snow4,snow5;
function preload(){
  snow_img=loadImage("snow3.jpg");
  snow4= loadImage("snow4.webp");
  snow5= loadImage("snow5.webp");

}

function setup() {
  createCanvas(800,400);
  snow = createSprite(400, 200, 50, 50);
  snow.addImage("snow",snow4);
  snow.scale = 0.2;
  snow.velocityY = 0.5;
  snow1 = createSprite(200, 300, 50, 50);
  snow1.addImage("snow",snow5);
  snow1.scale = 0.2;
  snow1.velocityY = 0.8;
  snow2 = createSprite(100, 100, 50, 50);
  snow2.addImage("snow",snow4);
  snow2.scale = 0.2;
  snow2.velocityY = 1;
  snow3 = createSprite(300, 50, 50, 50);
  snow3.addImage("snow",snow5);
  snow3.scale = 0.2;
  snow3.velocityY = 2;
}


function draw() {
  background(snow_img);  
  drawSprites();
}
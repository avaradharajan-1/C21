var fixedBox,movedBox;
function setup() {
  createCanvas(800,400);
  fixedBox = createSprite(200, 200, 50, 80);
  fixedBox.shapeColor = "green";
  movedBox = createSprite(400, 100, 80, 30);
  movedBox.shapeColor = "green";
  movedBox.velocityX = 2;


  object1 = createSprite(100,100,50,50);
  object1.shapeColor="blue";
  object1.velocityX =-2; 

}

function draw() {
  background(255,255,255);  
//movedBox.x = World.mouseX;
//movedBox.y = World.mouseY;
console.log("hi",movedBox.x-fixedBox.x)


  bounceOff(movedBox,object1)
  
  // if(isTouching(movedBox,object1)){
    
  //  movedBox.shapeColor = "red";
  //  object1.shapeColor = "red";
  
  // }
  // else {
  //   movedBox.shapeColor = "green";
  //   object1.shapeColor = "blue";




  // }

  drawSprites();

}


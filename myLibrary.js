function isTouching(movingBox,fixBox){

    if(movingBox.x-fixBox.x<fixBox.width/2+movingBox.width/2&&fixBox.x-movingBox.x<movingBox.width/2+fixBox.width/2&&fixBox.y-movingBox.y<fixBox.height/2+movingBox.height/2&&movingBox.y-fixBox.y<movingBox.height/2
      +fixBox.height/2){
     return true
    }
    
    else {
    
      return false
    }
  
  }

  function bounceOff(movingBox,fixBox){
  
    if(movingBox.x-fixBox.x<fixBox.width/2+movingBox.width/2&&fixBox.x-movingBox.x<movingBox.width/2+fixBox.width/2)
{
movingBox.velocityX = movingBox.velocityX*(-1)
    
fixBox.velocityX = fixBox.velocityX*(-1)


}     
if(movingBox.x>800){
movingBox.velocityX = movingBox.velocityX*(-1);
}
if(fixBox.x<0){
fixBox.velocityX = fixBox.velocityX*(-1)  
}
  
  
  
  
  
  }
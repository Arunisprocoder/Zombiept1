var backgroundimage 
var player, playerimage 
var bullet,bulletimage,bulletGroup
var invisibleGround
var Zombie,ZombieImage,ZombieGroup
var Zarr,Zindex=0,Brr,Bindex=0

function preload(){
backgroundimage = loadImage("baackkgroundimage/backgroundimage.jpg")
playerimage = loadAnimation("player/player1.png","player/player2.png","player/player3.png"
,"player/player4.png","player/player5.png","player/player6.png","player/player7.png","player/player8.png"
,"player/player9.png","player/player10.png","player/player11.png")
bulletimage=loadImage("bullet/bullet.png")
ZombieImage = loadAnimation("zombie/zombie1.png","zombie/zombie2.png","zombie/zombie3.png"
,"zombie/zombie4.png","zombie/zombie5.png","zombie/zombie6.png","zombie/zombie7.png"
,"zombie/zombie8.png","zombie/zombie9.png","zombie/zombie10.png","zombie/zombie11.png","zombie/zombie12.png")
}



function setup() {
  createCanvas(displayWidth,displayHeight);
  player=createSprite(120, 400, 50, 50);
  player.addAnimation("playerimage",playerimage)
  player.scale = 0.6
  
  invisibleGround=createSprite(140,565,200,20)
  invisibleGround.visible=false

  ZombieGroup= new Group()
  bulletGroup = new Group()

  Zarr=[]
  
}

function draw() {
  background(backgroundimage);
  
  player.collide(invisibleGround)

  if(keyDown("W")){
  player.y=player.y-4
  }
  if(keyDown("S")){
  player.y=player.y+4
  }


  spwanZombie()

 if(bulletGroup.isTouching(ZombieGroup)){
   Zarr[Zindex-1].destroy()
 }

 
  drawSprites();
}
function mouseReleased(){
  bullet= createSprite(210,482.134,50,50)
  bullet.addImage("bulletimage",bulletimage)
  bullet.scale = 0.05
  bullet.velocityX=40
  bullet.y = player.y+78
  bullet.x = player.x+90
  bulletGroup.add(bullet)

}

function spwanZombie(){
if(frameCount%100===0){
  Zombie= createSprite(width,129,0,0)
  Zombie.y= Math.round(random(50,400))
    Zombie.addAnimation("ZombieImage",ZombieImage)
  Zombie.scale = 0.3
  Zombie.velocityX= -4
  Zombie.lifetime = 320

  Zarr.push(Zombie)
  Zindex= Zindex+1

  ZombieGroup.add(Zombie)
}

}
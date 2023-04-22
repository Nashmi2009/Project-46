var Cat,Cat_img
var GuardDog,GuardDog_img
var Road,Road_img
var Puddle,Puddle_img
var ground

function preload(){
 Cat_img = loadImage("Cat.png")
 GuardDog_img = loadImage("GuardDog.webp")
 Puddle_img = loadImage("Puddle.jpeg")
 Road_img = loadImage("Road.jpg")

}

function setup(){
createCanvas(600,600)

Road = createSprite(300,300)
Road.addImage("Road",Road_img)
Road.scale = 1.5
Road.velocityY = 3

ground = createSprite(280,550,600,10)
ground.visible = false

Cat = createSprite(150,540);
Cat.addImage("Cat",Cat_img)
Cat.scale = 0.15
Cat.velocityY = 3


}

function draw(){
  background(0)
if(Road.y > 400){
  Road.y = 100
}
Cat.collide(ground)
Cat.x = World.mouseX
drawSprites()
}


function spawnPuddles(){
  if(frameCount % 60 === 0){
   Puddle = createSprite(300,100)
    Puddle.addImg
  }
}
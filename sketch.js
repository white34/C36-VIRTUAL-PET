//Create variables here
var dog;
var database;
var gameState=0;
var form,game,player;
var playerCount;
var food;
var fed,fed;
var DogImg,DogHappy,milkImg;
var foodStatus;
//var foodStock;

function preload()
{
  //load images here
  DogImg=loadImage("dogImg.png");
  sad=loadImage("deadDog.png")
  
  DogHappy=loadImage("dogImg1.png");
 //milkImg=loadImage("Milk.png");

 Bedroom=loadImage("Bed Room.png");
 Garden=loadImage("Garden.png");
 Washroom=loadImage("Wash Room.png");

}

function setup() {
  createCanvas(800, 750);
 
  database=firebase.database();
  var fedRef=database.ref("lastFed");
  fedRef.on("value",readTime);

  game=new Game();
  game.getState();
  game.getStock();
  game.start();

  foodObj= new Food();
}

function draw() { 
     if(gameState==0){
       background(146, 93, 211);
     }
  
      if(gameState===1){    
        game.getStock(); 
      background(180,52,65);
      textSize(30);
      fill("white");
      text("Food remaining : "+food,280,250);
      text("Last fed at : "+fed,280,300); 
      
      dog=createSprite(400,350,50,50);
      dog.scale=0.14;
      dog.addImage(DogImg);
      
      //dog.addImage(DogImg);
      if(keyWentDown(UP_ARROW)){
      game.updateStock(food);
      fed=hour(); 
      fed=hour();  
      writeTime(fed);
      }

      //console.log(fed);
       nowTime=hour();
      //console.log(nowTime);
      //console.log(fed);
      if(nowTime===fed+1){
      foodObj.garden();
      foodObj.update("garden");
      dog.visible=false;
      //dog.remove();
      }else if(nowTime===fed+2){
        foodObj.bedroom();
        foodObj.update("bedroom");
        dog.visible=false;
        //dog.remove();
        }else if(nowTime===fed+3){
          foodObj.washroom();
          foodObj.update("washroom");
          dog.visible=false;
          //dog.remove();
          }else{
            foodObj.display();
            foodObj.update("hungry");
            dog.addImage(DogImg);
            //dog.addImage(sad);
          }
          if(foodStatus!=="hungry"){
            
          }

    
    }//if gameState=1 close
    drawSprites();
}

//database functions

function readTime(data){
  var fedRef=database.ref("lastFed");
      fedRef.on("value",function(data){
        fed=data.val();
      });
}

function writeTime(fed){
database.ref('/').update({
  lastFed:fed
})
}






















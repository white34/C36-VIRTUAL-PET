class Game{
    constructor(){}

    getState(){
    var databaseRef=database.ref("gameState");
    databaseRef.on("value",function(data){    
        gameState=data.val();     
    })
    }//getState close

    update(state){
    database.ref("/").update({
        gameState:state
    }) 
    }//update state close


    getStock(){
      var foodStockRef=database.ref("food");
      foodStockRef.on("value",function(data){
        food=data.val();
      });
      }

     
      
      updateStock(x){
        //update the foodstock
          if(x<=0){
            x=0;
          }else{
            x=x-1;
          }
          database.ref('/').update({
            food:x
          })
      }
 
    
    

    start(){
      if(gameState===0){
          player=new Player();
          player.getCount();

          form=new Form();
          form.display();
      }  
    }

    play(){
        if(gameState===1){
            form.hide();         
        }
    }
 
    
}
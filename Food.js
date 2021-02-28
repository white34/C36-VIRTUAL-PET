class Food{
    constructor(){
     this.image=loadImage("Milk.png");
    // this.foodStock=20;
    }   

    update(foodStatus){
        database.ref('/').update({
          foodStatus:foodStatus  
        });
    }
    
    bedroom(){
        
        background(Bedroom);
        
    }
    garden(){
        background(Garden);

    }
    washroom(){
        background(Washroom);
    }
        
    display(){
        var x=80,y=400;
        
        imageMode(CENTER);
        //image(this.image,720,220,70,70);
        if(food!=0){
            x=80;
            for(var i=0;i<food;i++){
                
                if(i%10==0){
                    x=80;
                    y+=50;
                }
                image(this.image,x,y,50,50);
                x=x+70;
            }
        }
    }
}
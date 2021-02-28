class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h1');
      this.reset = createButton('Add Food');

      /*this.bedroom=createButton('Bedroom');
      this.foodstock=createButton('Food Stock');
      this.garden=createButton('Garden');
      this.livingroom=createButton('Living Room');
      this.Washroom=createButton('Wash Room');
      this.Vaccination=createButton('Vaccination');
   */
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      /*this.bedroom.hide();
      this.foodstock.hide();
      this.garden.hide();
      this.livingroom.hide();
      this.Washroom.hide();
      this.Vaccination.hide();*/
    }
  
    display(){
      this.title.html("Virtual Pet App");
      this.title.position(displayWidth/2-120 , 60);
  
      this.input.position(displayWidth/2 - 100 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 -50, displayHeight/2);
      this.reset.position(displayWidth/2+300,30);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index=playerCount;
       // player.update(playerCount);
       // player.updateCount(playerCount);
        game.update(1);
        this.greeting.html("Hello " + player.name+" ! Press the up arrow key to feed the dog (His name is Max).")
        this.greeting.position(displayWidth/3 - 50, displayHeight/4-50);

       /* this.bedroom.position(360,70);
        this.foodstock.position(360,110);
        this.garden.position(360,150);
        this.livingroom.position(360,190);
        this.Washroom.position(360,230);
        this.Vaccination.position(360,270);*/
      });//button mouse-pressed

      /*this.bedroom.mousePressed(()=>{
        game.update(2);
      });
      this.foodstock.mousePressed(()=>{
        game.update(3);
      });
      this.garden.mousePressed(()=>{
        game.update(4);
      });
      this.livingroom.mousePressed(()=>{
        game.update(5);
      });
      this.Washroom.mousePressed(()=>{
        game.update(6);
      });
      this.Vaccination.mousePressed(()=>{
        game.update(7);
      });*/
  
      this.reset.mousePressed(()=>{
        //player.updateCount(0);
        //game.update(0);
       game.updateStock(21);
      });
  
    }
  }
  
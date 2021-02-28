class BedRoom{
    constructor(){
        this.Text=createElement("h2");
        this.image=image("Bed Room.png",300,300,100,100);
    }
    display(){
        this.Text.position(400,80);
        this.Text.html("Dog's Bedroom")
        imageMode(CENTER);
        image(this.image,300,300,100,100);
    }
}
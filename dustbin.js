class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.image = loadImage('images/dustbingreen.png');
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        fill('white');
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        image(this.image,460,560,200,200);
        } 
}
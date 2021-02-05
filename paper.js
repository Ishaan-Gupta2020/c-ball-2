class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
     this.image = loadImage('images/paper.png');
        this.body=Bodies.circle(x,y,20,options);  
     World.add(world,this.body); 


     
        
    }
    
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        fill('blue');
        image(this.image,0,0,50,50);
        pop();
    }

    
}
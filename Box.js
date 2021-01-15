class Box{
    constructor (x,y){
        this.body=Bodies.rectangle(x,y,50,100,{restitution:0.7,friction:1.0});
        World.add(world,this.body);
    }
    
    display(){
     
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        //fill("red")
        rect(0,0,50,100);
        pop();
    }
    }
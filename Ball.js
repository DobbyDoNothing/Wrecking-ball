class Ball{
    constructor (x,y){
        this.body=Bodies.circle(x,y,50,{density:3,});
        World.add(world,this.body);
    }
    
    display(){
     
        push();
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(RADIUS);
        fill("grey")
        ellipse(0,0,50,50);
        pop();
    }
    }
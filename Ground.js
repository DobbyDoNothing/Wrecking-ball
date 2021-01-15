class Ground{
constructor (x,y){
    this.body=Bodies.rectangle(x,y,width,10,{isStatic:true});
    World.add(world,this.body);
}

display(){
 
    push();
    rectMode(CENTER);
    fill("brown")
    rect(this.body.position.x,this.body.position.y,width,10);
    pop();
}
}
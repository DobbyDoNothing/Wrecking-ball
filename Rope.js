class Rope{

    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.0,
            length:150
        }

        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }


    display(){

       var pointA=this.rope.bodyA.position;
       var pointB= this.rope.pointB;

       stroke("green");
       strokeWeight(4);
       line(pointA.x,pointA.y,pointB.x,pointB.y);
    }



}
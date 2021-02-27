class Slingshot{
    constructor(bodyA,pointB){
        var options={
           bodyA: bodyA,
           pointB: pointB,
           length: 250,
           stiffness: 1

        }

        this.sling = Constraint.create(options);
        World.add(world,this.sling);

        this.pointB = pointB;

    }

    display(){
        var pointA = this.sling.bodyA.position;

        var pointB = this.pointB;

        stroke("yellow")
        strokeWeight(4)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
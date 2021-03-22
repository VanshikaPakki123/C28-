class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    display()
    {
        if(this.slingshot.bodyA)
        {
        var bodyA = this.slingshot.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
     }
    Fly()
    {
       this.slingshot.bodyA = null;
    }
}


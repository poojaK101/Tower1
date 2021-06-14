class SlingShot{

    constructor(bodyA,pointB)
    {
    var options={
    bodyA: bodyA,
    pointB: pointB,
    stifness: 0.01,
    length:10
    }
    this.pointB = pointB;
    this.body = Constraint.create(options);
    world.add(world, this.body);
    }
    
    display()
    {
    var pointA = this.body.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
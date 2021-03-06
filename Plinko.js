class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.radius = 10;
        this.body = Bodies.circle(x, y, this.radius, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        
        fill("white");
        
        ellipse(pos.x,pos.y,this.radius,this.radius);
        
    }

};
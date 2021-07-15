class CannonBall {
    constructor(x,y){
    var options ={
     restitution:0.8,
     friction:1,
     density:1,
     isStatic: true
    }
    this.body=Bodies.circle(x,y,40,options)
    this.image=loadImage("assets/cannonball.png")
    World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    var angle = this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER);
    image(this.image,0,0,40,40)
    pop()
    }
    shoot(){
    var velocity=p5.Vector.fromAngle(cannon.angle)
    velocity.mult(20)
    Matter.Body.setStatic(this.body,false)
    Matter.Body.setVelocity(this.body,{x:50,y:-30})
    }
}
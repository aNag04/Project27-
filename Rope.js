class Rope{
    constructor(body1,body2,offSetX,offSetY)
   }
 var options = {
     bodyA:body1,
     bodyB:body2,
     pointB:{x:this.offSetX, y:offSetY}
 }
 this.offSetx = offSetX;
 this.offSetY = offSetY;
 this.rope = Constraint.create(options)
 World.add(world,this.rope)
display();
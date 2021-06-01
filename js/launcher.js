class Launcher {
constructor(objectA, objectB){
    var options = {
    bodyA : objectA,
    pointB : objectB,
    stiffness : 0.004,
    length : 10
    }
    this.pointB = objectB
    this.launcher = Constraint.create(options)
    World.add(world,this.launcher);
}
fly() {
    this.launcher.bodyA = null; 
}
  display() {
      if(this.launcher.bodyA){
          var pointA = this.launcher.bodyA.position
          var pointB = pointB
          strokeWeight(6)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
      }
  } 

}


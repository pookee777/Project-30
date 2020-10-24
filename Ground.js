class Ground 
{
  constructor(x,y,width,height) 
  {
    var options = 
    {
      isStatic: true
    }
    this.ground = Bodies.rectangle(x,y,width,height,options);  
    this.width = width;
    this.height = height;    
    World.add(world, this.ground);
  }

  display()
  {     
    strokeWeight(2);
    fill("white");
    rectMode(CENTER);
    rect(this.ground.position.x,this.ground.position.y,900,20);
  }
}
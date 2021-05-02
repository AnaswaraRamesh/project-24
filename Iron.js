class Iron{
constructor(x,y){
    var options ={
     'restitution':0.8,
     'friction':3,
     'density':30
    }
   this.body = Bodies.rectangle(x,y,100,70,options)
   this.width = 100;
   this.height = 70;
   World.add(world,this.body)
}
display(){
    var pos = this.body.position
    push();
    translate(pos.x, pos.y);
    
    strokeWeight(5);
    stroke('white')
    fill('black')
    rectMode(CENTER)
    rect(0, 0,100,70);
    pop();

}

}
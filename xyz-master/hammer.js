class hammer{
constructor(x,y){
var options = {
isStatic: false,
'density': 2,
'friction': 1.0,
'restitution': 0.5

}

//this.x = x;
//this.y = y;
this.w = 50
this.h = 50
this.body = Bodies.rectangle(x,y,50,50,options);
World.add(world,this.body);
}
display()
{
    var pos =this.body.position;
    var angle = this.body.angle;
    pos.x = mouseX
    pos.y = mouseY
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();

}




}
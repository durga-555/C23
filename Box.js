class Box{
    //constructor is invoked when a new object is created
constructor(x, y, width, height){
    var option={
        restitution:0.8
    }
    // telling the computer we are rectangle body
this.body=Bodies.rectangle(x,y,width,height,option);
this.width=width
this.height=height
World.add(world,this.body);

}
display(){
var pos=this.body.position  
var angle=this.body.angle
push()
//captures new settings
translate(pos.x, pos.y)
//translate-> will allow the object to move to new x and y position
rotate(angle)
rectMode(CENTER);
fill("red");
rect(0,0,this.width,this.height);
pop()
//pop reverts to old setting
}
}
class ground{
    //constructor is invoked when a new object is created
constructor(x, y, width, height){
    var option={
        isStatic:true
    }
    // telling the computer we are rectangle body
this.body=Bodies.rectangle(x,y,width,height,option);
this.width=width
this.height=height
World.add(world,this.body);

}
display(){
var pos=this.body.position  
rectMode(CENTER);
fill(255);
rect(pos.x,pos.y,this.width,this.height);

}
}
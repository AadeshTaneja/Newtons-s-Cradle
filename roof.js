class Roof{

    constructor(x,y){

        var options={
			isStatic:true			
			}
        
        this.width=250;
        this.height=20;
        this.body = Bodies.rectangle(x,y,1600,20,options);
        World.add(world,this.body);

    }
    display(){

        var Pos=this.body.position;
        
        push()
        translate(Pos.x,Pos.y);
        rectMode(CENTER)
        fill("yellow")
        strokeWeight(3)
        stroke("yellow")
        rect(0,0,this.width,this.height)
        pop()

  


    }



}
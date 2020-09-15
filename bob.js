class Bob{

    constructor(x,y){
       var options={
             
            isStatic: false,
            restitution:1,
           density:0.2
                    

        }
   
       this.body = Bodies.circle(x,y,20,options)
        this.radius = 40;
        World.add(world,this.body)

    }

    display(){
 
        var pos = this.body.position
        
        push()
        translate(pos.x,pos.y);
        fill(255,0,255)
        ellipseMode(CENTER)
        ellipse(0,0,this.radius,this.radius);
        pop()
       



    }

















}
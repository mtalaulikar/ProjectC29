class Box{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 40;
        var g_options = {
            restitution : 0.1,
            density : 1,
            friction : 2
            
        }
        this.body = Bodies.rectangle(this.x,this.y, this.width, this.height,g_options);
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width,this.height);
        pop();
        
    }
}
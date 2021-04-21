const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;


function setup(){
    createCanvas(1000,500);

    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(460,350,150,10);
    ground2 = new Ground(800,250,150,10);
    mainGround = new Ground(500,495,1000,10);

    stone = new Stone();
    //create boxes
    //ground 1 layer 1
    box111 = new Box(400,345);
    box112 = new Box(420,345);
    box113 = new Box(440,345);
    box114 = new Box(460,345);
    box115 = new Box(480,345);
    box116 = new Box(500,345);
    box117 = new Box(520,345);

    //ground1 layer2
    box121 = new Box(410,250);
    box122 = new Box(430,250);
    box123 = new Box(450,250);
    box124 = new Box(470,250);
    box125 = new Box(490,250);
    box126 = new Box(510,250);

    //ground1 layer 3
    box131 = new Box(420,200);
    box132 = new Box(440,200);
    box133 = new Box(460,200);
    box134 = new Box(480,200);
    box135 = new Box(500,200);

    //ground2 layer1
    box211 = new Box(740,145);
    box212 = new Box(760,145);
    box213 = new Box(780,145);
    box214 = new Box(800,145);
    box215 = new Box(820,145);
    box216 = new Box(840,145);
    box217 = new Box(860,145);

    //ground2 layer2
    box221 = new Box(750,80);
    box222 = new Box(770,80);
    box223 = new Box(790,80);
    box224 = new Box(810,80);
    box225 = new Box(830,80);
    box226 = new Box(850,80);

    //ground2 layer3
    box231 = new Box(760,50);
    box232 = new Box(780,50);
    box233 = new Box(800,50);
    box234 = new Box(820,50);
    box235 = new Box(840,50);



    slingShot = new SlingShot(stone.body, {x:90,y:200});

}

function draw(){
    background("grey");
    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
    Engine.update(engine);
    ground1.display();
    ground2.display();
    mainGround.display();
    
    stone.display();
    strokeWeight(4);
    fill("pink");
    box111.display();
    box112.display();
    box113.display();
    box114.display();
    box115.display();
    box116.display();
    box117.display();

    fill("lightgreen");
    box121.display();
    box122.display();
    box123.display();
    box124.display();
    box125.display();
    box126.display();

    fill("orange");
    box131.display();
    box132.display();
    box133.display();
    box134.display();
    box135.display();

    fill("pink");
    box211.display();
    box212.display();
    box213.display();
    box214.display();
    box215.display();
    box216.display();
    box217.display();

    fill("lightgreen");
    box221.display();
    box222.display();
    box223.display();
    box224.display();
    box225.display();
    box226.display();

    fill("orange");
    box231.display();
    box232.display();
    box233.display();
    box234.display();
    box235.display();


    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX, y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
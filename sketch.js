const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload(){

}
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,780,1200,40);
    step1 = new Ground(600,500,300,20);

    box1 = new Box(500,450,50,50);
    box2 = new Box(550,450,50,50);
    box3 = new Box(600,450,50,50);
    box4 = new Box(650,450,50,50);
    box5 = new Box(700,450,50,50);

    box6 = new Box(550,400,50,50);
    box7 = new Box(600,400,50,50);
    box8 = new Box(650,400,50,50);

    box9 = new Box(580,350,50,50);
    box10 = new Box(630,350,50,50);

    box11 = new Box(600,300,50,50);

    step2 = new Ground(900,300,300,30);

    box12 = new Box(800,250,50,50);
    box13 = new Box(850,250,50,50);
    box14 = new Box(900,250,50,50);
    box15 = new Box(950,250,50,50);
    box16 = new Box(1000,250,50,50);

    box17 = new Box(850,200,50,50);
    box18 = new Box(900,200,50,50);
    box19 = new Box(950,200,50,50);

    box20 = new Box(880,150,50,50);
    box21 = new Box(930,150,50,50);

    box22 = new Box(900,100,50,50);

    Wrecker = new Box(100,300,50,50);

    sling = new Slingshot(Wrecker.body,{x:200,y:300})



}

function draw(){
    background(0);
    Engine.update(engine);

    fill('blue');
    ground.display();
    step1.display();
    step2.display();

    fill("aqua");
    box1.display();
    box2.display();
    box3.display();
    box3.display();
    box4.display();
    box5.display();
    
    fill("lightgrey")
    box6.display();
    box7.display();
    box8.display();

    fill('aqua');
    box9.display();
    box10.display();

    fill('lightgrey');
    box11.display();

    fill('aqua');
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    fill('lightgrey');
    box17.display();
    box18.display();
    box19.display();

    fill('aqua');
    box20.display();
    box21.display();

    fill('lightgrey');
    box22.display();

    fill('lightblue');
    Wrecker.display();

    fill('white');
    sling.display();

}
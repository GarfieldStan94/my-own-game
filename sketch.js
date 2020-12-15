

var elonMusk;
var ground;
var platform1,platform2;
var brownie,browniesGroup;
function setup() {
createCanvas(600,600);
elonMusk=createSprite(300,500,20,20);
ground=createSprite(300,580,600,20);

platform1= createSprite(100,300,50,10);
platform2 = createSprite(475,400,50,10);


browniesGroup= new Group();

}

function draw() {
    background(0);

    if(keyDown("space")){
        elonMusk.velocityY=-5;
    }
    elonMusk.velocityY += 0.5;

    if(keyDown(LEFT_ARROW)){
        elonMusk.x-=5;
    }

    if(keyDown(RIGHT_ARROW)){
        elonMusk.x+=5;
    }

    spawnCakes();
    browniesGroup.bounceOff(ground);
    elonMusk.collide(platform1);
    elonMusk.collide(platform2);
    elonMusk.collide(ground);
    drawSprites();
}

function spawnCakes(){
    if(frameCount%80==0){
        brownie = createSprite(200,0,30,20);
        brownie.shapeColor="brown";
        brownie.x= Math.round(random(20,580));
        brownie.velocityY = 2;
        
        browniesGroup.add(brownie);

    }
}







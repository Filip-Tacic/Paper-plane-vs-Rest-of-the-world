//CONSTANTS

const VELOCITY=4;
const BUILDING_VELOCITY=1;
const PLAYER_MOVESPEED=30;

//CANVAS 
var canvas= document.getElementById("cnv");
var context=canvas.getContext("2d");


//BACKGROUND Creation
var bckg= new Image();
bckg.src="/assets/buildings/flappy-buildings-01.png";


//VEHICLES Creation


    //Vehicle 1
var v1 = new Image();
v1.src="/assets/vehicles/vehicle-1.png";
v1X=1200-v1.width;
v1Y=0;

    //Vehicle 2
var v2 = new Image();
v2.src="/assets/vehicles/vehicle-2.png";
v2X=1600-v2.width;
v2Y=250-v2.height;

    //Vehicle 3
var v3 = new Image();
v3.src="/assets/vehicles/vehicle-3.png";
v3X=2000-v3.width;
v3Y=100;



//BUILDINGS Creation


    //Building 1
var b1= new Image();
b1.src="/assets/buildings/flappy-buildings-1.png";
var b1X=400;

    //Building 2
var b2= new Image();
b2.src="/assets/buildings/flappy-buildings-2.png";
b2X=800;

    //Building 3
var b3= new Image();
b3.src="/assets/buildings/flappy-buildings-3.png";
b3X=1200;



//PLAYER Creation and MOVEMENT
var player = new Image();
player.src="/assets/vehicles/player.png";
playerX=0;
playerY=250;

document.addEventListener("keydown", move);

function move(btn){
    switch (btn.keyCode) {
        case 38: playerY-=PLAYER_MOVESPEED;break;
        case 40: playerY+=PLAYER_MOVESPEED;
    } 
}

//-------------------------------FUNCTIONS----------------------------------------//




function game(){

    context.drawImage(bckg, 0, 0);


    context.drawImage(b1, b1X, canvas.height-110-b1.height);
    b1X-=BUILDING_VELOCITY;
    if (b1X+b1.width<0){
        var randomBuildingNumber=Math.floor(Math.random()*19);
        b1.src="/assets/buildings/flappy-buildings-"+randomBuildingNumber+".png";
        b1X=bckg.width;
    }
    
    context.drawImage(b2, b2X, canvas.height-110-b2.height);
    b2X-=BUILDING_VELOCITY;
    if(b2X+b2.width<0){
        var randomBuildingNumber=Math.floor(Math.random()*19);
        b2.src="/assets/buildings/flappy-buildings-"+randomBuildingNumber+".png";
        b2X=bckg.width; 
    }

    context.drawImage(b3, b3X, canvas.height-110-b3.height);
    b3X-=BUILDING_VELOCITY;
    if(b3X+b3.width<0){
        var randomBuildingNumber=Math.floor(Math.random()*19);
        b3.src="/assets/buildings/flappy-buildings-"+randomBuildingNumber+".png";
        b3X=bckg.width; 
    }

    context.drawImage(v1, v1X, v1Y);
    v1X-=VELOCITY;
    if(v1X+v1.width<20){
        var randomBuildingNumber=Math.floor(Math.random()*10);
        v1.src="/assets/vehicles/vehicle-"+randomBuildingNumber+".png";
        v1X=bckg.width;
    }

    context.drawImage(v2, v2X, v2Y);
    v2X-=VELOCITY;
    if(v2X+v2.width<20){
        var randomBuildingNumber=Math.floor(Math.random()*10);
        v2.src="/assets/vehicles/vehicle-"+randomBuildingNumber+".png";
        v2X=bckg.width;
    }

    context.drawImage(v3, v3X, v3Y);
    v3X-=VELOCITY;
    if(v3X+v3.width<20){
        var randomBuildingNumber=Math.floor(Math.random()*10);
        v3.src="/assets/vehicles/vehicle-"+randomBuildingNumber+".png";
        v3X=bckg.width;
        v3X=bckg.width;
    }
    

    context.drawImage(player, playerX, playerY);





    requestAnimationFrame(game);
}

game();






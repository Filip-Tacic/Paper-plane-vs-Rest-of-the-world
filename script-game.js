const FPS =60;
const ENEMY_ROW_COUNT=20;


var canvas= document.getElementById("cnv");
var context=canvas.getContext("2d");

var player={
    x: canvas.width/2,
    y: canvas.height/2,
    d: 30,
    v: 180
}


var enemy=[];

function createEnemyRow () {
    for (let i=0; i++; i<ENEMY_ROW_COUNT){
        context.strokeStyle="red";
        context.lineWidth=3;
        context.beginPath();
        context.moveTo(
            Math.random()*player.x, Math.random()*(player.y-player.d/2));
        context.lineTo(Math.random()*player.x+player.d/2, Math.random()*(player.y));
        context.lineTo(Math.random()*player.x-player.d/2, Math.random()*(player.y));
        context.closePath();
        context.stroke();
        
    }
}

function playerMove(btn){
    switch (btn.keyCode) {
        case 37: player.x-=player.v/FPS; break;
        case 39: player.x+=player.v/FPS; break;
        case 38: player.y-=player.v/FPS; break;
        case 40: player.y+=player.v/FPS
    } 
}




function gameFunction(){

    context.fillStyle="black";
    context.fillRect(0,0, canvas.width, canvas.height);
    
    context.strokeStyle="white";
    context.lineWidth=3;
    context.beginPath();
    context.moveTo(
        player.x, player.y-player.d/2);
    context.lineTo(player.x+player.d/2, player.y);
    context.lineTo(player.x-player.d/2, player.y);
    context.closePath();
    context.stroke();
    

document.addEventListener("keydown", playerMove);
    
    
    
}

setInterval(gameFunction, 1000/FPS);
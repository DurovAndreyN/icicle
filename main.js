"use strict"




let cvs = document.getElementById('canvas');
let ctx = cvs.getContext('2d');



let bg = new Image();
let ice = new Image();
let snow = new Image();
let pers = new Image();


bg.src = 'Building.png';
ice.src = 'ice.png';
snow.src = 'snow.png';
pers.src = 'person.png';


let xPos = 300;
let yPos = 330;

// Перемещение персонажа.
document.addEventListener('keydown', move);
function move(pers) {
    if (pers.keyCode == 37 && xPos > 0) { 
        xPos -= 15; 
    }

    if (pers.keyCode == 39 && xPos < 461) {
        xPos += 15;
    }
}

let icicle = [];

icicle[0] = {
    x: 220,
    y: 0,
}

let grav = 10;

function draw() {
    ctx.drawImage(bg, 0, 0);
    
    // Генерация новых сосулек.
    for(let i = 0; i < icicle.length; i++){   
    ctx.drawImage(ice, icicle[i].x, icicle[i].y); 

      icicle[i].y++;

        if(icicle[i].y == 55) {
            icicle.push({
                x: Math.floor(Math.random() * 511),
                y: 0,
            });
        }
        if((xPos + pers.width >= icicle[i].x && xPos <= icicle[i].x + ice.width)
        && (yPos + pers.height >= icicle[i].y && yPos <= icicle[i].y + ice.height)) {
            location.reload();
        }   
     
    }
    
    ctx.drawImage(pers, xPos, yPos);

    ctx.drawImage(snow, 0, 390);
 

    requestAnimationFrame(draw);

}


pers.onload = draw;

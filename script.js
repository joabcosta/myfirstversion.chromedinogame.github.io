import {jump} from "./jump.js";
import {startCactusCreator} from "./cactus.js";
import {startScore} from "./score.js";


var dino = document.querySelector('.dino');
var isJumping = false;

export function scriptGame(){

startScore();
startCactusCreator();
document.addEventListener('keyup',handleKeyUp);
function handleKeyUp(event){   
    if(event.keyCode === 32){
        console.log('press space!');
        if(!isJumping){ 
            jump(isJumping);
            isJumping=false; 
        }
    }
}
}
 



import {verifyDinoPosition} from "./jump.js";
import {score,getScore} from "./score.js";

let background = document.querySelector('.background');
background.style.bottom = '0%';
let createCactus;
let varPosition = 0;
let levelcontrol = false;

export function startCactusCreator(){
    pauseCactusCreator();
    createCactus = setInterval(()=>{creatCactus()},2000);
}
export function pauseCactusCreator(){
    clearInterval(createCactus);
}

export function creatCactus(){
    console.log('criou cactus');
    const cactus = document.createElement('div');
    let cactusPosition = 95;
    let dinoPosition = 0;
    //let randomTime = Math.random()*6000;

    cactus.classList.add('cactus');  
    cactus.style.left = 95 + "%";
    cactus.style.bottom = varPosition + "%";
    background.appendChild(cactus);

    let leftInterval = setInterval
    (
        ()=>{
                    dinoPosition = verifyDinoPosition();
                    console.log(dinoPosition+' '+cactusPosition);
                    if(cactusPosition<0){
                        clearInterval(leftInterval);
                        background.removeChild(cactus);
                        console.log('removido cactus');
                    }
                    else if (levelcontrol==false && (cactusPosition > 0) && (cactusPosition<6) && ((dinoPosition-varPosition)<6)){ 
                        //Gamve Over
                        clearInterval(leftInterval);
                        document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
                        score('endGame'); }
                    else if(getScore() == 50){
                        levelcontrol = true;
                        clearInterval(leftInterval);
                        score('level_1_Concluido');
                        background.style.bottom = varPosition+'%';
                        
                    } else if (getScore() == 100){
                        levelcontrol = true;
                        clearInterval(leftInterval);
                        score('level_2_Concluido');
                        background.style.bottom = varPosition+'%';
                    }else if (getScore() == 199){
                        levelcontrol = true;
                        clearInterval(leftInterval);
                        score('level_3_Concluido');
                        document.body.innerHTML = '<h1 class="game-over" style="background-image: url(assets/img/giphy.gif); height= 200px;">WINNER</h1>';
                        
                    } else{
                        cactusPosition -=5;
                        cactus.style.left = cactusPosition + "%";
                    }
            },
            160
    );
    //setTimeout(creatCactus, randomTime);
}


export function setCactusNivelPosition(numero){
    varPosition = varPosition + numero;
}

export function setLevelControl(){
    levelcontrol=false;
}

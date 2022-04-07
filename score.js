import {pauseCactusCreator, startCactusCreator,setLevelControl,setCactusNivelPosition} from './cactus.js'
import { setDinoNivelPosition } from './jump.js';

var pontos = -1;
let temporizadorScore;
var cactusPosition = document.querySelector('.cactus');
var tempo = window.document.getElementById('score');

export function startScore(){
    pauseScore();
    temporizadorScore = setInterval(()=>{score();},250);
}

export function pauseScore(){
    clearInterval(temporizadorScore);
}

export function score(endgame){
    pontos++;
    tempo.innerHTML = pontos;

    if(endgame=='endGame'){
        console.log('game over fi');
        pauseScore();
        pauseCactusCreator();
        //paro de contar
    }else if(endgame=='level_1_Concluido'){
        console.log('level 1 ganhou');
        //seta configuração do level 2
        level_1.insertAdjacentHTML("beforeend", 
            '<strong><h3 style="background-image: url(assets/img/background.png); width:100%; bottom:0%;  position: absolute; ">Level 1 concluído.</h3></strong>');
        
        setDinoNivelPosition(25);
        setCactusNivelPosition(25);
        //pausa
        pauseScore();
        pauseCactusCreator();
        //continua contando
        setTimeout(()=>{
            startScore();
            startCactusCreator();
            setLevelControl();
        },5000); 

    }else if (endgame == 'level_2_Concluido'){
        console.log('level 2 ganhou');
        //seta configuração do level 3
        //pausa
        pauseScore();
        pauseCactusCreator();
        level_2.insertAdjacentHTML("beforeend", 
            '<strong><h4 style="background-image: url(assets/img/background.png); width:100%; bottom:0%;  position: absolute; ">Level 2 concluído.</h4></strong>');
        setDinoNivelPosition(25);
        setCactusNivelPosition(25);
        //pausa
        pauseScore();
        pauseCactusCreator();
        //continua contando
        setTimeout(()=>{
            startScore();
            startCactusCreator();
            setLevelControl();
        },5000); 
    }else if (endgame == 'level_3_Concluido'){
        console.log('Winner');
        //pausa
        pauseScore();
        pauseCactusCreator();
        level_2.insertAdjacentHTML("beforeend", 
            '<strong><h5 style=" background-image: url(assets/img/giphy.gih); width:100%; bottom:0%;  position: absolute; ">Win!.</h5></strong>');
        

    } else if (endgame == 'start'){
        
    }
}   

export function getScore(){
    return pontos;
}


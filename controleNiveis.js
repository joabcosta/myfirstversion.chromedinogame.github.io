import {scriptGame} from './script.js';
import {getScore} from './score.js';


let acumuladorScore=-1;
let temporizadorGame;

function startGame(){
    temporizadorGame = setInterval(()=>
    {
        acumuladorScore=getScore();
        console.log('temporizador inicial: '+acumuladorScore);
        if(  acumuladorScore ==  -1 ){
            //level 1
            acumuladorScore=0;
            console.log('entrou level 1');
            clearInterval(temporizadorGame);
            setTimeout(()=>{
                scriptGame();
                console.log('inicou jogo...');
            },1000);
            //setTimeout(()=>{startGame();console.log('retornou checagem do jogo')},3000);
        } else if (acumuladorScore == 10 ){
            //level 2
            console.log('entrou level 2');
            clearInterval(temporizadorGame);
            //scriptGame();
            
        }
    },230);
}

startGame();






//controleDeNiveis(acumuladorScore);
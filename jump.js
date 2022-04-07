var dino = document.querySelector('.dino');
let position = 0;
let varPosition = 0;


export function jump(isJumping){
    isJumping = true;
    let upInterval = setInterval(
        ()=>{
            if(position>=varPosition+25){ //antes 25
                    clearInterval(upInterval);
                        //Descendo
                        let downInverval = setInterval
                        (
                            ()=>{
                            if(position<=varPosition){
                                clearInterval(downInverval);
                                isJumping = false;}
                            else{    
                                position-=25;
                                dino.style.bottom = position + '%';}
                                },
                        500);
                            } 
            else{
                //Subindo
                position+=25;
                dino.style.bottom = position + '%';}
        }, 
        150 );
        return position;}

export function verifyDinoPosition(){
    return position;
}

export function setDinoNivelPosition(numero){
    varPosition = varPosition + numero;
    dino.style.bottom = varPosition+'%'
}
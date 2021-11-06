let introC = document.getElementById('introC');
let playC = document.getElementById('playC');
let winC = document.getElementById('winC');
let looseC = document.getElementById('looseC');
let introV = document.getElementById('introV');
let playV= document.getElementById('playV');
let winV = document.getElementById('winV');
let D1 = document.getElementById('D1');
let D2 = document.getElementById('D2');
let D3 = document.getElementById('D3');
let D4 = document.getElementById('D4');
let D5 = document.getElementById('D5');
let D6 = document.getElementById('D6');
let D7 = document.getElementById('D7');
let D8 = document.getElementById('D8');
let D9 = document.getElementById('D9');
let D10 = document.getElementById('D10');
let digits = [D1,D2,D3,D4,D5,D6,D7,D8,D9,D10]

const imgFolder = "img/"
const videoFolder = "video/"

let code = "";
let soluce = "1122334455"
let step = 0;

/**
 * Reset :
 */
let reset = () => {
    introC.style.display = "block";
    playC.style.display = "none";
    winC.style.display = "none";
    looseC.style.display = "none";

    playV.pause();
    playV.currentTime = 0;

    winV.pause();
    winV.currentTime = 0;

    container = document.getElementById('container');
    container.requestFullscreen()
    introV.src = videoFolder+"hello.mp4";
    introV.play();

    digits.forEach((digit) =>{
        digit.src = imgFolder+'neutre.png'
    })
    step = 0;
    code = "";
}

/**
 * Win :
 */
 let win = () => {
    introC.style.display = "none";
    playC.style.display = "none";
    winC.style.display = "block";
    looseC.style.display = "none";

    playV.pause();
    playV.currentTime = 0;

    introV.pause();
    introV.currentTime = 0;

    winV.src = videoFolder+"win.mp4";
    winV.play();
}

/**
 * Loose :
 */
 let loose = () => {
    introC.style.display = "none";
    playC.style.display = "none";
    winC.style.display = "none";
    looseC.style.display = "block";

    playV.pause();
    playV.currentTime = 0;

    introV.pause();
    introV.currentTime = 0;

    winV.pause();
    winV.currentTime = 0;
}

/**
 *   Next Moove : 
 */
let nextMoove = (input) => {
    code += input
    
    digits[code.length-1].src = imgFolder+input+'ok.png'

    if(code.length%2 == 0){

        playV.style.display = "block";
        playV.pause()
        playV.currentTime = 0;
        playV.src = videoFolder+"V"+step+".mp4";
        playV.play();
        
        step += 1;
    }else{

        playV.pause()
        playV.currentTime = 0;
        playV.style.display = "none";

    }
}

/**
 * play :
 */
let play = (event) => {
    console.log(step)
    if(step==0){
        introC.style.display = "none";
        playC.style.display = "block";
        winC.style.display = "none";
        looseC.style.display = "none";

        introV.pause();
        introV.currentTime = 0;

        winV.pause();
        winV.currentTime = 0;
        step += 1;
        nextMoove(event.key);
    }else{
        if(step == 6){
            if(soluce == code){
                win()
            }else{
                loose()
            }
        }else{
            nextMoove(event.key);
        }
    }
}

/**
 * Main :
 */
document.addEventListener("keypress", function(event) {
    
    if(event.key === "0"){
        reset()
    }else{
        play(event)
    }
});
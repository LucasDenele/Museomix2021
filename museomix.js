let introC = document.getElementById('introC');
let playC = document.getElementById('playC');
let winC = document.getElementById('winC');
let looseC = document.getElementById('looseC');
let introV = document.getElementById('introV');
let playV= document.getElementById('playV');
playV.removeAttribute('loop');
let winV = document.getElementById('winV');
winV.removeAttribute('loop')
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

let Dl1 = document.getElementById('Dl1');
let Dl2 = document.getElementById('Dl2');
let Dl3 = document.getElementById('Dl3');
let Dl4 = document.getElementById('Dl4');
let Dl5 = document.getElementById('Dl5');
let Dl6 = document.getElementById('Dl6');
let Dl7 = document.getElementById('Dl7');
let Dl8 = document.getElementById('Dl8');
let Dl9 = document.getElementById('Dl9');
let Dl10 = document.getElementById('Dl10');
let digitsl = [Dl1,Dl2,Dl3,Dl4,Dl5,Dl6,Dl7,Dl8,Dl9,Dl10]

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

    digitsl.forEach((dl, index) => {
        if(code[index] == soluce[index]){
            digitsl[index].src = imgFolder+code[index]+'ok.png'
        }else{
            digitsl[index].src = imgFolder+code[index]+'nok.png'
        }
    })
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

playV.addEventListener("ended", () => {
    if(step == 6){
        play(null)
    }
})
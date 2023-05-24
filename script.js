console.log('Welcome to tictactoe Game')

let audioTurn  = new Audio("ting.mp3")
let gameOverAudio  =new  Audio("gameover.mp3")
let music  =new  Audio("music.mp3")
music.muted = false;

let turn = "X"
let gameOver = false;
let reset = document.getElementById('reset');

// function to change turn
const changeTurn = () => {
    return turn === "X"?"0":"X"
}


// function to check win

// const checkWin = () =>{
// let boxtext = document.getElementsByClassName('boxtext');
// let wins = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7 ],
//     [2, 5, 8]
//     [0, 4, 8],
//     [2, 4, 6],
// ]
// wins.forEach(e =>{
//     if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '') ){
//         document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
//         gameOver = true
//     }
// })
// }
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, -17, 5, 0],
        [3, 4, 5, -16, 15, 0],
        [6, 7, 8, -16, 25, 0],
        [0, 3, 6, -27, 15, 90],
        [1, 4, 7, -16, 15, 90],
        [2, 5, 8, -7, 15, 90],
        [0, 4, 8, -16, 15, 45],
        [2, 4, 6, -17, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameOverAudio.play();
            music.play();
            gameOver = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="130px"
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="130px"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

// main game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameOver)
            document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
        }
    
    })
})

// will reset the game 

reset.addEventListener('click',()=>{
    let boxtexts= document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(e=>{
        e.innerText = ""
    });
    turn = "X";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
    music.muted=true;
    document.querySelector(".line").style.width = "0px";

    
})
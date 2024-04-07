let box = document.querySelectorAll('.box');
let winmsg = document.querySelector('#msg');
let winnerhide = document.querySelector('.winner');
let newBtn = document.querySelector('#newBtn');
let resetBtn= document.querySelector('#resetBtn');


let val = Math.floor(Math.random()*3);

if(val === 0){
    val = 'X';
}else{
    val = 'O';
}

box.forEach(i => {
    i.addEventListener('click', ()=>{
        myfunction(i);
    });
});

function inputfun(){
    if(val == 'X'){
        val = 'O';
       }
       else{
           val = 'X';
       }
       return val; 
}
const clickSound = new Audio('./music/move.mp3') 
function myfunction(box){
    clickSound.play();
    box.innerText = `${inputfun()}`;
    box.disabled = 'true';
    checkwinner();
}

const winboard = [
 [0,1,2],
 [0,3,6],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8]
];

function checkwinner(){
    winboard.forEach(i =>{
      let val0 = box[i[0]].innerText;
      let val1 = box[i[1]].innerText;
      let val2 = box[i[2]].innerText;
     if(val0 != '' && val1 != '' && val2 != ''){
        if(val0 === val1 && val1 === val2){
            showmsg(val0);
        }
     }
    });
}
const winnerSound = new Audio('./music/winner.mp3')
function showmsg(data){
    winnerSound.play();
    winnerhide.classList.remove('hide');
    winmsg.innerText = `Congratulations! ${data} is winner`;
    disableBtn();
}

function disableBtn(){
    box.forEach(i => {
    i.disabled = true;
    })
}

function enableBtn(){
    box.forEach(i => {
    i.disabled = false;
    i.innerText = '';
    })
}

newBtn.addEventListener('click', resetfun);
resetBtn.addEventListener('click', resetfun);

const resetSound = new Audio('./music/food.mp3')
function resetfun(){
    resetSound.play();
    winnerhide.classList.add('hide');
    enableBtn();
}

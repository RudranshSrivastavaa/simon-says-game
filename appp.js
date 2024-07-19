let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("DOMContentLoaded", function() {
   document.addEventListener("keypress",function(){
     if(started== false){
        console.log("the game has started");
        started = true;

        levelUp();
     }
   });

   function gameFlash(btn){
     btn.classList.add("flash");
     setTimeout(function(){
        btn.classList.remove("flash");
     },250)
   }

   function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash");
    },250)
  }

   function levelUp(){
     level++;
     h2.innerText = `Level ${level}`;

     let randIdx = Math.floor(Math.random()*3)
     let randColor = btns[randIdx];
     let randBtn = document.querySelector(`.${randColor}`);
     gameSeq.push(randBtn);
     console.log(gameSeq);
     gameFlash(randBtn);
   }

   function checkAns(idx){
    
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    
    else{
        h2.innerText=`Game over! Press any key to start.`
    }
   }

   function btnPress(){
    console.log(this);
    let btn = this;
    userflash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
   }

   let allBtns = document.querySelectorAll(".btn");
   for(btn of allBtns){
     btn.addEventListener("click",btnPress);
   }
});
  
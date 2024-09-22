let dice1="dice1.png"
let dice2="dice2.png"
let dice3="dice3.png";
let dice4="dice4.png";
let dice5="dice5.png";
let dice6="dice6.png";

const diceImg=[dice1,dice2,dice3,dice4,dice5,dice6]
let randomImg=Math.floor(Math.random() * 6);

const diceImg2=[dice1,dice2,dice3,dice4,dice5,dice6]
let randomImg2=Math.floor(Math.random() * 6);

function gameStart(){
    
    function comp(){
        
        let compDice=document.querySelector(".player1dice");
        compDice.innerHTML=`<img src=${diceImg[randomImg]}>`
        
    }
    

    function user(){

        let compDice=document.querySelector(".player2dice");
        compDice.innerHTML=`<img src=${diceImg[randomImg2]}>`
        
    }
    comp();
    user();
    

    function result(){
        if(randomImg>randomImg2){
            let winText=document.querySelector(".wins")
            winText.innerHTML="<h4>Player 1 Wins</h4>"
        }else if(randomImg==randomImg2){
            let winText=document.querySelector(".wins")
            winText.innerHTML="<h4>It's a Tie</h4>"
        }else{
            let winText=document.querySelector(".wins")
            winText.innerHTML="<h4>Player 2 Wins</h4>"
        }
    }


    result()
}
gameStart();



console.log(randomImg)
console.log(randomImg2)

let max = 6 

let choice1 = document.querySelector(".player1 img")
let choice2 = document.querySelector(".player2 img")
let title = document.querySelector("h1")
function getRandomInt(max) {
    return Math.floor(Math.random() * max)+1;
  }



function roll(){
    let player1 = getRandomInt(max)
    let player2 = getRandomInt(max)
    console.log(player1 ,player2)
    choice1.src=`image/dice${player1}.svg`
    choice2.src=`image/dice${player2}.svg`
    console.log(choice1,choice2)
    

if (player1 === player2){
    title.style.color="red"
    title.innerText="tie"
} else if (player1 > player2){
    title.style.color="blue"
    title.innerText="Player1 Wins"
}else{
    title.innerText="Player2 Wins"
    title.style.color="green"
}


}

roll()


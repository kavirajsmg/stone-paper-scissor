let playAgain= true;
while(playAgain) {
    let userInput=prompt("Please Enter stone,paper or scissor").toLowerCase();
    let choose=["paper","stone","scissor"];
    let computer=choose[Math.floor(Math.random()*choose.length)];
    if(userInput===computer){
        alert("Tie");
    }
    else if(userInput==="stone"&&computer==="paper"){
        alert("Computer Wins");

    }
    else if(userInput==="stone"&&computer==="scissor"){
        alert("You Win");
    }
    else if(userInput==="paper"&&computer==="scissor"){
        alert("Computer Wins");
    }
    else if(userInput==="paper"&&computer==="stone"){
        alert("You Win");
    }
    else if(userInput==="scissor"&&computer==="paper"){
        alert("You Win");
    }
    else if(userInput==="scissor"&&computer==="stone"){
        alert("Computer Wins");
    }
    else{
        alert("Invalid Input");
    }
    playAgain=confirm("Do You Want To Play Again ?")
    if(playAgain===false){
        alert("Thanks For Playing");
    }
}

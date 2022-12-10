let humanScore = 0;
let computerScore = 0;

document.querySelector('.rock').onclick = Rock;
document.querySelector('.paper').onclick = Paper;
document.querySelector('.scissors').onclick = Scissors;

function Rock() {
  play("rock");
}
function Paper() {
  play("paper");
}
function Scissors() {
  play("scissors");
}

function play(human) {
  
  let computerTurn = getComputerPlay();
  
  document.getElementById('maingame').innerHTML = "<p>You played <strong>" + human + "</strong>. The bot played <strong>" + computerTurn + "</strong>.</p>";
  
  if(human == 'rock') {
    if(computerTurn == 'rock') {
      document.getElementById('maingame').innerHTML += "<p>It's a tie. 🎀</p>";
    } else if (computerTurn == 'paper') {
      document.getElementById('maingame').innerHTML += "<p>Computer wins and not you 😝 </p>";
      computerScore++;
    } else if (computerTurn == 'scissors') {
      document.getElementById('maingame').innerHTML += "<p>You win! 🎉</p>";
      humanScore++;
    }
  } else if (human == 'paper') {
    if(computerTurn == 'rock') {
      document.getElementById('maingame').innerHTML += "<p>You win! 🎉</p>";
      humanScore++;
    } else if (computerTurn == 'paper') {
      document.getElementById('maingame').innerHTML += "<p>It's a tie. 🎀</p>";
    } else if (computerTurn == 'scissors') {
      document.getElementById('maingame').innerHTML += "<p>Computer wins and not you 😝 </p>";
      computerScore++;
    }  
  } else if (human == 'scissors') {
    if(computerTurn == 'rock') {
      document.getElementById('maingame').innerHTML += "<p>Computer wins and not you 😝 </p>";
      computerScore++;
    } else if (computerTurn == 'paper') {
      document.getElementById('maingame').innerHTML += "<p>You win! 🎉</p>";
      humanScore++;
    } else if (computerTurn == 'scissors') {
      document.getElementById('maingame').innerHTML += "<p>It's a tie. 🎀</p>";
    }  
  }
  
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
  
}

function getComputerPlay() {
  let plays = ['rock', 'paper', 'scissors'];
  let play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}

// count down
function countDown( seconds ) {
let counter = seconds;
let interval = setInterval( function() {
    console.log(counter);

counter--;
if ( counter >= 0 ) {
let id = document.getElementById("count");
id.innerHTML = counter;
} else {
clearInterval( interval );
console.log("Done");
}
}, 1000)
}
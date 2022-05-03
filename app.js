function computerPlay() {

    let computerPick;
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            computerPick = 'rock'
            break;
        case 2:
            computerPick = 'paper'
            break;
        case 3:
            computerPick = 'scissors'
            break;
        default:
            break;
    }
    return computerPick;
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection){
        console.log('Tie')
    }
    else if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            console.log('computer Won');

        }else{
            console.log('Player Won'); 
        }
    }
    else if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            console.log('computer Won');
        }else{
            console.log('Player Won'); 
        }
    }
    else if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            console.log('computer Won');

        }else{
            console.log('Player Won'); 

        }
    }
}
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
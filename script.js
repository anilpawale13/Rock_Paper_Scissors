const getUserChoice=userInput =>{
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' 
    || userInput === 'bomb') {
        return userInput;
      } 
        
      else{
        console.log(`error ,please  enter valid name like:- "rock","paper","scissors".`)
      }


}

//console.log(getUserChoice('car'));
console.log(getUserChoice('paper'));

const getcomputerChoice =()=>{
    const randomnumnber=Math.floor(Math.random()*3);
    switch(randomnumnber){
        case 0:
            return 'rock';
            break;

            case 1:
                return 'paper';
                break;

                case 2:
                    return 'scissors';
                    break;

                    
    }
}

// console.log(getcomputerChoice());

// console.log(getcomputerChoice());

// console.log(getcomputerChoice());

const determineWinner = (userChoice,computerChoice)=>{
    if(userChoice === 'bomb'){
        return 'BOMB WIN';

    }
    
const determineWinner = (userChoice,computerChoice)=>{
    if(userChoice === computerChoice){
        return 'draw the game';

    }
    
    if(userChoice == 'rock'){
        if(computerChoice == 'paper'){
        return 'sry you loss the game';
        }
    }else{
        return 'you win the game';

    }


    if(userChoice == 'paper'){
        if(computerChoice == 'scissors'){
        return 'sry you loss the game';
        }
    }else{
        return 'you win the game';

    }


    if(userChoice == 'scissors'){
        if(computerChoice == 'rock'){
        return 'sry you loss the game';
        }
    }else{
        return 'you win the game';

    }

    
}
  


};



// console.log(determineWinner('rock','scissors'));

const playgame=()=>{
    const userChoice =getUserChoice('bomb');
    const computerChoice = getcomputerChoice();
    console.log('you threw:' + userChoice);
    console.log('COMPUTER THREW:'+computerChoice); 

    console.log(determineWinner(userChoice,computerChoice)); 

}

playgame();
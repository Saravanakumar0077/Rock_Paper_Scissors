const computerChoiceDisplay =  document.getElementById('computer-Choice')
const userChoiceDisplay =  document.getElementById('user-Choice')
const resultDisplay =  document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id  //That e is Click & target to the id to take action
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)  //possibleChoices.length
    console.log(randomNumber)


    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'paper'
    }
    if(randomNumber === 3){
        computerChoice = 'scissor'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result = 'its a draw!!'
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you Win!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissor'){
        result = 'you Lose!'
    }
    if(computerChoice === 'paper' && userChoice === 'scissor'){
        result = 'you Win!'
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you Win!'
    }
    if(computerChoice === 'scissor' && userChoice === 'rock'){
        result = 'you Win!'
    }
    if(computerChoice === 'scissor' && userChoice === 'paper'){
        result = 'you Lose!'
    }

    resultDisplay.innerHTML = result

}
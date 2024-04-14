const result = document.querySelector ('.result')
let MyScore = document.querySelector ('#human-score')
let machineScore = document.querySelector ('#machine-score')

let humanScoreNumber = 0 
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    console.log (humanChoice)
    
    playTheGame(humanChoice, playMachine())
    
}
   
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)


    return choices [randomNumber]
}

const playTheGame = (human, machine) => {
    console.log ('Humano:' + human + 'Maquina:' + machine)

if(human=== machine) {
    result.innerHTML = 'Empate'

} else if (  (human === 'paper' &&  machine === 'rock') || 
  (human === 'rock' && machine === 'scissors') ||
human === 'scissors' && machine === 'paper')  {

    humanScoreNumber++
     MyScore.innerHTML = humanScoreNumber 
    
    result.innerHTML = 'Você ganhou!'
} else {
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber
    result.innerHTML = 'Você perdeu!'
}


}








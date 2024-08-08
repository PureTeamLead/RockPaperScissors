const playerScoreBox = document.getElementById('player-score')
const computerScoreBox = document.getElementById('computer-score')
const rockBtn = document.getElementById('rock-btn')
const paperBtn = document.getElementById('paper-btn')
const scissorsBtn = document.getElementById('scissors-btn')
const resetBtn = document.getElementById('reset-game-btn')
const winnerMsg = document.getElementById('winner-msg')
const resultsMsg = document.getElementById('results-msg')

let playerScore = 0
let computerScore = 0

function getComputerPick() {
	const picks = ['Rock', 'Paper', 'Scissors']
	return picks[Math.floor(Math.random() * picks.length)]
}

function hasPlayerWonTheRound(player, computer) {
	return (
		(player === 'Rock' && computer === 'Scissors') ||
		(player === 'Scissors' && computer === 'Paper') ||
		(player === 'Paper' && computer === 'Rock')
	)
}

const optionsContainer = document.querySelector('.options-container')

function getRoundResults(playerChose) {
	const computerChose = getComputerPick()

	if (hasPlayerWonTheRound(playerChose, computerChose)) {
		playerScore++
		playerScoreBox.innerText = playerScore
		resultsMsg.innerText = `Player wins! ${playerChose} beats ${computerChose}`
	} else if (playerChose === computerChose) {
		resultsMsg.innerText = `It's a tie! Both chose ${playerChose}`
	} else {
		computerScore++
		computerScoreBox.innerText = computerScore
		resultsMsg.innerText = `Computer wins! ${computerChose} beats ${playerChose}`
	}

	if (playerScore === 3 || computerScore === 3) {
		winnerMsg.innerText = `${
			playerScore === 3 ? 'Player' : 'Computer'
		} has won the game!`

		resetBtn.style.display = 'block'
		optionsContainer.style.display = 'none'
	}
}

function resetGame() {
	playerScore = 0
	computerScore = 0
	playerScoreBox.innerText = playerScore
	computerScoreBox.innerText = computerScore
	winnerMsg.innerText = ''
	resultsMsg.innerText = ''
	resetBtn.style.display = 'none'
	optionsContainer.style.display = 'block'
}

rockBtn.addEventListener('click', function () {
	getRoundResults('Rock')
})
paperBtn.addEventListener('click', function () {
	getRoundResults('Paper')
})
scissorsBtn.addEventListener('click', function () {
	getRoundResults('Scissors')
})

resetBtn.addEventListener('click', resetGame)

const imgPlayerChoice = document.getElementById('playerChoice');
const imgComputerChoice = document.getElementById('computerChoice');

const pResult = document.getElementById('result');
const pScore = document.getElementById('score');

const buttons = document.querySelectorAll('button');
const choices = ['piedra', 'papel', 'tijeras']; // 0, 1, 2

buttons.forEach(
	button => button.addEventListener('click', startGame)
);

function startGame(event) {
	// determinar la elección del jugador
	const button = event.currentTarget;
	const playerChoice = button.dataset.choice;
	console.log(playerChoice);

	// determinar la elección de la computadora
	const computerChoice = getComputerChoice();
	console.log(computerChoice);

	// determinar quién gana
	// const playerWins = isPlayerWinner(playerChoice, computerChoice);

	// mostrar resultados
	/*if (playerWins) {

	} else {

	}*/
}

function getComputerChoice() {
	// obtener un valor aleatorio i (0, 1, 2)
	const i = parseInt(Math.random() * 3); 
	// vamos a devolver la elección de la computadora
	return choices[i];
}

function isPlayerWinner() {
	
}

const imgPlayerChoice = document.getElementById('playerChoice');
const imgComputerChoice = document.getElementById('computerChoice');

const pResult = document.getElementById('result');
const pScore = document.getElementById('score');

const buttons = document.querySelectorAll('button');
const choices = ['piedra', 'papel', 'tijeras']; // 0, 1, 2
const fileNames = {
	'piedra': 'images/rock.png',
	'papel': 'images/paper.png',
	'tijeras': 'images/scissors.png',
};

let positiveScore = 0;
let negativeScore = 0;

buttons.forEach(
	button => button.addEventListener('click', startGame)
);

function startGame(event) {
	// determinar la elección del jugador
	const button = event.currentTarget;
	const playerChoice = button.dataset.choice;
	// console.log(playerChoice);

	// determinar la elección de la computadora
	const computerChoice = getComputerChoice();
	// console.log(computerChoice);

	// determinar quién gana
	const winner = getWinner(playerChoice, computerChoice);
	// console.log(`El ganador es: ${winner}`);

	// mostrar resultados
	imgPlayerChoice.setAttribute('src', fileNames[playerChoice]);
	imgComputerChoice.setAttribute('src', fileNames[computerChoice]);

	let result;

	if (winner === 'player') {
		result = 'ganas';
		++positiveScore; // positiveScore = positiveScore +1;
		// positiveScore += 1;
	} else if (winner === 'computer') {
		result = 'pierdes';
		++negativeScore;
	} else { // empate
		result = 'empatas';
	}

	pResult.innerHTML = `Tú ${result}
						escogiendo <strong>${playerChoice}</strong>
						en contra de <strong>${computerChoice}</strong>.`;

	pScore.innerHTML = `Has ganado ${positiveScore} veces. Has perdido ${negativeScore} veces.`;
}

function getComputerChoice() {
	// obtener un valor aleatorio i (0, 1, 2)
	const i = parseInt(Math.random() * 3); 
	// vamos a devolver la elección de la computadora
	return choices[i];
}

function getWinner(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		return null;
	}

	if (playerChoice === 'piedra') {
		if (computerChoice === 'papel') {
			return 'computer';
		} else { // tijeras
			return 'player';
		}
	} else if (playerChoice === 'papel') {
		if (computerChoice === 'piedra') {
			return 'player';
		} else { // tijeras
			return 'computer';
		}
	} else { // 'tijeras'
		if (computerChoice === 'papel') {
			return 'player';
		} else { // piedra
			return 'computer';
		}
	}
}

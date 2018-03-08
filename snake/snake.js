const myCanvas = document.getElementById('myCanvas');
const context = myCanvas.getContext('2d');

context.fillRect(0, 0, 20, 20);

document.addEventListener('keydown', moveSnake);

function moveSnake(event) {
	switch (event.key) {
		case 'ArrowUp':
			console.log('Mover hacia arriba');
			break;
		case 'ArrowDown':
			console.log('Mover hacia abajo');
			break;
		case 'ArrowRight':
			console.log('Mover hacia la derecha');
			break;
		case 'ArrowLeft':
			console.log('Mover hacia la izquierda');
			break;
	}
}
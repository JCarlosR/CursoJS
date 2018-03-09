const myCanvas = document.getElementById('myCanvas');
const context = myCanvas.getContext('2d');

const SIZE = 20;

const cuadrado = {
	x: 0,
	y: 0
};

setInterval(draw, 1000); // 1000ms = 1s

function draw() {
	drawObject(cuadrado);
	cuadrado.x += SIZE;
}


function drawObject(obj) {
	context.fillRect(obj.x, obj.y, SIZE, SIZE);
}

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
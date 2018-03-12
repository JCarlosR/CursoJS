const myCanvas = document.getElementById('myCanvas');
const context = myCanvas.getContext('2d');

const SIZE = 20;

const head = { x: 0, y: 0 };
let food = null; // x: y:

let dx = 0;
let dy = 0;

setInterval(main, 1000); // 1000ms = 1s

function main() {
	update(); // actualizar las variables del juego
	draw(); // dibujar todos los objetos del juego
}

function update() {
	// actualizar las coords de la cabeza de la serpiente
	head.x += dx;
	head.y += dy;

	// detectar si la serpiente ha consumido el alimento
	if (food && head.x === food.x && head.y === food.y) {
		food = null;
		// aumentar el tamaño de la serpiente
	}
	

	// generar el alimente en caso que no exista
	if (!food) {
		food = { x: getRandomX(), y: getRandomY() };
	}
}

function getRandomX() {
	// 0, 20, 40, ..., 380
	// 0, 1, 2, ..., 19       x20
	return 20 * parseInt(Math.random() * 20);
}

function getRandomY() {
	// 0, 20, 40, ..., 440
	// 0, 1, 2, ..., 22
	return 20 * parseInt(Math.random() * 23);	
}

function draw() {
	context.fillStyle = 'black';
	context.fillRect(0, 0, myCanvas.width, myCanvas.height);
	drawObject(head, 'lime');
	drawObject(food, 'white');
}


function drawObject(obj, color) {
	context.fillStyle = color;
	context.fillRect(obj.x, obj.y, SIZE, SIZE);
}

document.addEventListener('keydown', moveSnake);

function moveSnake(event) {
	switch (event.key) {
		case 'ArrowUp':
			console.log('Mover hacia arriba');
			dx = 0;
			dy = -SIZE;
			break;
		case 'ArrowDown':
			console.log('Mover hacia abajo');
			dx = 0;
			dy = +SIZE;
			break;
		case 'ArrowRight':
			console.log('Mover hacia la derecha');
			dx = +SIZE;
			dy = 0;
			break;
		case 'ArrowLeft':
			console.log('Mover hacia la izquierda');
			dx = -SIZE;	
			dy = 0;
			break;
	}
}
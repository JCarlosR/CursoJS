import Square from './Square.js'

console.log('Iniciando juego...');

const myCanvas = document.getElementById('myCanvas');
const context = myCanvas.getContext('2d');

const SIZE = 20;

const head = new Square(0, 0);
const body = [];

let food = null;

let dx = 0;
let dy = 0;

let lastAxis; // 'Y', 'X'

setInterval(main, 150); // 1000ms = 1s

function main() {
	update(); // actualizar las variables del juego
	draw(); // dibujar todos los objetos del juego
}

function update() {
	const collisionDetected = checkSnakeCollision();
	if (collisionDetected) {
		gameOver();
		return;
	}

	// salvar la posición previa del último elemento de la serpiente
	let prevX, prevY;
	if (body.length >= 1) {
		prevX = body[body.length-1].x;
		prevY = body[body.length-1].y;
	} else {
		prevX = head.x;
		prevY = head.y;
	}

	// el cuerpo de la serpiente siga a la cabeza de la serpiente
	for (let i=body.length-1; i>=1; --i) {
		body[i].x = body[i-1].x; // elem i <- elem i-1
		body[i].y = body[i-1].y; // body[i] = body[i-1]
	}
	if (body.length >= 1) {
		body[0].x = head.x;
		body[0].y = head.y;
	}

	// actualizar las coords de la cabeza de la serpiente
	head.move(dx, dy);

	// determinamos en qué eje ha ocurrido el último movimiento
	if (dx !== 0) {
		lastAxis = 'X';
	} else if (dy !== 0) {
		lastAxis = 'Y';
	}

	// detectar si la serpiente ha consumido el alimento
	if (food && head.checkCollision(food)) {
		food = null;
		// aumentar el tamaño de la serpiente
		increaseSnakeSize(prevX, prevY);
	}
	

	// generar el alimento en caso que no exista
	if (!food) {
		food = randomFoodPosition();
	}
}

function checkSnakeCollision() {
	// coordenadas de la cabeza sean igual a las coordenadas de un elem del cuerpo
	for (let i=0; i<body.length; ++i) {
		if (head.x == body[i].x && head.y == body[i].y) {
			return true;
		}
	}

	// verificar que la serpiente no se salga de los límites permitidos
	const topCollision = (head.y < 0); // x: ? , y: 0
	const bottomCollision = (head.y > 440); // x: ?, y: 440
	const leftCollision = (head.x < 0); // x: 0, y: ?
	const rightCollision = (head.x > 380); // x: , y: ?
	if (topCollision || bottomCollision || leftCollision || rightCollision) {
		return true;
	}

	return false;
}

function gameOver() {
	console.log('gameOver fired');
	alert('Has perdido');
	head.x = 0;
	head.y = 0;
	dy = 0; dx = 0;
	body.length = 0;
}

function increaseSnakeSize(prevX, prevY) {
	body.push(
		new Square(prevX, prevY)
	);
}

function randomFoodPosition() {
	let position;
	do {
		position = { x: getRandomX(), y: getRandomY() };
	} while(checkFoodCollision(position));
	return position;
}

function checkFoodCollision(position) {
	// comparar las coordenadas del alimento generado con el cuerpo de la serpiente
	for (let i=0; i<body.length; ++i) {
		if (body[i].checkCollision(position)) {
			return true;
		}
	}

	// comparar las coordenadas del alimento generado con la cabeza de la serpiente
	if (head.checkCollision(position)) {
		return true;
	}

	return false;
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
	// definir un fondo negro
	context.fillStyle = 'black';
	context.fillRect(0, 0, myCanvas.width, myCanvas.height);

	// cabeza
	drawObject(head, 'lime');
	// cuerpo
	body.forEach(
		elem => drawObject(elem, 'lime')
	);
	// alimento
	drawObject(food, 'white');
}


function drawObject(obj, color) {
	context.fillStyle = color;
	context.fillRect(obj.x, obj.y, SIZE, SIZE);
}

document.addEventListener('keydown', moveSnake);

function moveSnake(event) {
	// las condiciones restringen el movimiento sobre el mismo eje
	switch (event.key) {
		case 'ArrowUp':
			if (lastAxis !== 'Y') {
				dx = 0;
				dy = -SIZE;
				console.log('Mover hacia arriba');
			}
			break;
		case 'ArrowDown':
			if (lastAxis !== 'Y') {
				dx = 0;
				dy = +SIZE;
				console.log('Mover hacia abajo');
			}
			break;
		case 'ArrowRight':
			if (lastAxis !== 'X') {
				dx = +SIZE;
				dy = 0;
				console.log('Mover hacia la derecha');
			}
			break;
		case 'ArrowLeft':
			if (lastAxis !== 'X') {
				dx = -SIZE;	
				dy = 0;
				console.log('Mover hacia la izquierda');			
			}
			break;
	}
}
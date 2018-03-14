const myCanvas = document.getElementById('myCanvas');
const context = myCanvas.getContext('2d');

const SIZE = 20;

const head = { x: 0, y: 0 };
const body = [];

let food = null; // x: y:

let dx = 0;
let dy = 0;

setInterval(main, 200); // 1000ms = 1s

function main() {
	update(); // actualizar las variables del juego
	draw(); // dibujar todos los objetos del juego
}

function update() {
	checkSnakeCollission();

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
	head.x += dx;
	head.y += dy;

	// detectar si la serpiente ha consumido el alimento
	if (food && head.x === food.x && head.y === food.y) {
		food = null;
		// aumentar el tamaño de la serpiente
		increaseSnakeSize(prevX, prevY);
	}
	

	// generar el alimente en caso que no exista
	if (!food) {
		food = { x: getRandomX(), y: getRandomY() };
	}
}

function checkSnakeCollission() {
	// coordenadas de la cabeza sean igual a las coordenadas de un elem del cuerpo
	for (let i=0; i<body.length; ++i) {
		if (head.x == body[i].x && head.y == body[i].y) {
			alert('Has perdido');
		}
	}
}

function increaseSnakeSize(prevX, prevY) {
	body.push({
		x: prevX, y: prevY
	});
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
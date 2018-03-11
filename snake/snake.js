const myCanvas = document.getElementById('myCanvas');
const context = myCanvas.getContext('2d');

const SIZE = 20;

const head = {
	x: 0,
	y: 0
};

let dx = 0;
let dy = 0;

setInterval(main, 1000); // 1000ms = 1s

function main() {
	update(); // actualizar las variables del juego
	draw(); // dibujar todos los objetos del juego
}

function update() {
	head.x += dx;
	head.y += dy;
}

function draw() {
	context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	drawObject(head);
}


function drawObject(obj) {
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
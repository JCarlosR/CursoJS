import Square from './Square.js'
import Snake from './Snake.js'

export default class {

	constructor(idCanvasElement, standardSize=20) {
		this.myCanvas = document.getElementById(idCanvasElement);
		this.context = myCanvas.getContext('2d');

		this.SIZE = standardSize;
		
		this.food = null;
		this.snake = new Snake();
		this.dx = 0;
		this.dy = 0;

		this.lastAxis; // 'Y', 'X'

		document.addEventListener('keydown', this.moveSnake.bind(this));
	}

	update() {
		if (this.snakeHasCollided()) {
			this.gameOver();
			return;
		}

		// salvar la posición previa del último elemento de la serpiente
		const lastElement = this.snake.getLastElement();
		let prevX = lastElement.x;
		let prevY = lastElement.y;

		this.snake.move(this.dx, this.dy);

		// determinamos en qué eje ha ocurrido el último movimiento
		if (this.dx !== 0) {
			this.lastAxis = 'X';
		} else if (this.dy !== 0) {
			this.lastAxis = 'Y';
		}

		// detectar si la serpiente ha consumido el alimento
		if (this.food && this.snake.head.checkCollision(this.food)) {
			this.food = null;
			// aumentar el tamaño de la serpiente
			this.snake.addElement(
				new Square(prevX, prevY)
			);
		}
		

		// generar el alimento en caso que no exista
		this.generateFoodIfNeeded();
	}

	snakeHasCollided() {
		// coordenadas de la cabeza sean igual a las coordenadas de un elem del cuerpo
		if (this.snake.hasCollided())
			return true;

		// verificar que la serpiente no se salga de los límites permitidos
		if (this.snake.hasBrokenTheLimits(0, this.myCanvas.width-this.SIZE, 0, this.myCanvas.height-this.SIZE))
			return true;

		return false;
	}

	gameOver() {
		console.log('gameOver fired');
		alert('Has perdido');
		this.dy = 0; this.dx = 0;
		this.snake.reset();
	}

	generateFoodIfNeeded() {
		if (this.food)
			return;

		do {
			this.food = new Square(this.getRandomX(), this.getRandomY());
		} while(this.snake.checkFullCollision(this.food));
	}

	getRandomX() {
		// 0, 20, 40, ..., 380
		// 0, 1, 2, ..., 19       x20
		return this.SIZE * parseInt(Math.random() * 20);
	}

	getRandomY() {
		// 0, 20, 40, ..., 440
		// 0, 1, 2, ..., 22
		return this.SIZE * parseInt(Math.random() * 23);	
	}

	draw() {
		// definir un fondo negro
		this.context.fillStyle = 'black';
		this.context.fillRect(0, 0, this.myCanvas.width, this.myCanvas.height);

		// cabeza
		this.drawObject(this.snake.head, 'lime');

		// cuerpo
		this.snake.body.forEach(
			elem => this.drawObject(elem, 'lime')
		);

		// alimento
		this.drawObject(this.food, 'white');
	}

	drawObject(obj, color) {
		this.context.fillStyle = color;
		this.context.fillRect(obj.x, obj.y, this.SIZE, this.SIZE);
	}

	moveSnake(event) {
		// las condiciones restringen el movimiento sobre el mismo eje
		switch (event.key) {
			case 'ArrowUp':
				if (this.lastAxis !== 'Y') {
					this.dx = 0;
					this.dy = -this.SIZE;
					console.log('Mover hacia arriba');
				}
				break;
			case 'ArrowDown':
				if (this.lastAxis !== 'Y') {
					this.dx = 0;
					this.dy = +this.SIZE;
					console.log('Mover hacia abajo');
				}
				break;
			case 'ArrowRight':
				if (this.lastAxis !== 'X') {
					this.dx = +this.SIZE;
					this.dy = 0;
					console.log('Mover hacia la derecha');
				}
				break;
			case 'ArrowLeft':
				if (this.lastAxis !== 'X') {
					this.dx = -this.SIZE;	
					this.dy = 0;
					console.log('Mover hacia la izquierda');			
				}
				break;
		}
	}
}
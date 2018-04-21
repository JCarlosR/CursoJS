import Square from './Square.js'

export default class {
	constructor() {
		this.head = new Square(0, 0);
		this.body = [];
	}

	addElement(element) {
		this.body.push(element);
	}

	move(dx, dy) {
		// el cuerpo de la serpiente siga a la cabeza de la serpiente
		// 3 elementos -> body.length = 3
		// i=3; i=2; i=1;
		// 3 <- 2
		// 2 <- 1
		// 1 <- 0
		// 0 <- head
		for (let i=this.body.length-1; i>=1; --i) {
			this.body[i].x = this.body[i-1].x; // elem i <- elem i-1
			this.body[i].y = this.body[i-1].y; // body[i] = body[i-1]
		}
		if (this.body.length >= 1) {
			this.body[0].x = this.head.x;
			this.body[0].y = this.head.y;
		}

		// actualizar las coords de la cabeza de la serpiente
		this.head.move(dx, dy);
	}

	getLastElement() {
		if (this.body.length >= 1) {
			return this.body[this.body.length-1];
		} else {
			return this.head;
		}
	}

	hasCollided() {
		for (let i=0; i<this.body.length; ++i) {
			if (this.body[i].checkCollision(this.head)) {
				return true;
			}
		}
	}

	hasBrokenTheLimits(x1, x2, y1, y2) {
		const topCollision = (this.head.y < y1); // x: ? , y: 0
		const bottomCollision = (this.head.y > y2); // x: ?, y: 440
		const leftCollision = (this.head.x < x1); // x: 0, y: ?
		const rightCollision = (this.head.x > x2); // x: , y: ?
		if (topCollision || bottomCollision || leftCollision || rightCollision) {
			return true;
		}
	}

	checkFullCollision(position) {
		// comparar las coordenadas del alimento generado con el cuerpo de la serpiente
		for (let i=0; i<this.body.length; ++i) {
			if (this.body[i].checkCollision(position)) {
				return true;
			}
		}

		// comparar las coordenadas del alimento generado con la cabeza de la serpiente
		if (this.head.checkCollision(position)) {
			return true;
		}
	}

	reset() {
		this.head.x = 0;
		this.head.y = 0;
		this.body.length = 0;
	}
}
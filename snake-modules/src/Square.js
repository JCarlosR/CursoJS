export default class {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	move(dx, dy) {
		this.x += dx;
		this.y += dy;
	}

	checkCollision(obj) {
		return this.x == obj.x && this.y == obj.y;
	}
}
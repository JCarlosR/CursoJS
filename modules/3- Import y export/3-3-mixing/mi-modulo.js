export function saludar(nombre) {
	return `Hola ${nombre}`;
}

export function despedir(nombre) {
	return `Hasta ${luego()} ${nombre}`;
}

export default class {
	constructor(lado) {
		this.lado = lado;
	}

	get area() {
		return this.lado * this.lado;
	}
}

export var x = 777;

function luego() {
	return 'luego';
}

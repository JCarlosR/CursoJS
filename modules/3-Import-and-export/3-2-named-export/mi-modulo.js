export function saludar(nombre) {
	return `Hola ${nombre}`;
}

export function despedir(nombre) {
	return `Hasta ${luego()} ${nombre}`;
}

export var x = 777;

function luego() {
	return 'luego';
}

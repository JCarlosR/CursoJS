import Game from './Game.js'

console.log('Iniciando juego...');

setInterval(main, 150); // 1000ms = 1s

const game = new Game('myCanvas');

function main() {
	game.update(); // actualizar las variables del juego
	game.draw(); // dibujar todos los objetos del juego
}

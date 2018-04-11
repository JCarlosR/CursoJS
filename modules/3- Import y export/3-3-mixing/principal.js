import Cuadrado, * as lib from './mi-modulo.js'
// import Cuadrado, {saludar as saludo, despedir} from './mi-modulo.js'

// Rename named imports
console.log(lib.saludar('Carlos'));
console.log(lib.despedir('Carlos'));

const x = new Cuadrado(7);
console.log(x.area);

// Named imports
// import {saludar, despedir} from './mi-modulo.js'
// console.log(saludar('Juan'));

// Namespace import
// import * as myModule from './mi-modulo.js'
// console.log(myModule.saludar('Juan'));
// console.log(myModule.despedir('Juan'));
// console.log(myModule.x);

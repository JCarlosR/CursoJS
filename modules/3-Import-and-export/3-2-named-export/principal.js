import {saludar as saludo, despedir} from './mi-modulo.js'

// Rename named imports
console.log(saludo('Carlos'));
console.log(despedir('Juan'));

// Named imports
// import {saludar, despedir} from './mi-modulo.js'
// console.log(saludar('Juan'));

// Namespace import
// import * as myModule from './mi-modulo.js'
// console.log(myModule.saludar('Juan'));
// console.log(myModule.despedir('Juan'));
// console.log(myModule.x);

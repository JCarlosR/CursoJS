/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar myCanvas = document.getElementById('myCanvas');\nvar context = myCanvas.getContext('2d');\n\nvar SIZE = 20;\n\nvar head = { x: 0, y: 0 };\nvar body = [];\n\nvar food = null; // x: y:\n\nvar dx = 0;\nvar dy = 0;\n\nvar lastAxis = void 0; // 'Y', 'X'\n\nsetInterval(main, 150); // 1000ms = 1s\n\nfunction main() {\n\tupdate(); // actualizar las variables del juego\n\tdraw(); // dibujar todos los objetos del juego\n}\n\nfunction update() {\n\tvar collisionDetected = checkSnakeCollision();\n\tif (collisionDetected) {\n\t\tgameOver();\n\t\treturn;\n\t}\n\n\t// salvar la posición previa del último elemento de la serpiente\n\tvar prevX = void 0,\n\t    prevY = void 0;\n\tif (body.length >= 1) {\n\t\tprevX = body[body.length - 1].x;\n\t\tprevY = body[body.length - 1].y;\n\t} else {\n\t\tprevX = head.x;\n\t\tprevY = head.y;\n\t}\n\n\t// el cuerpo de la serpiente siga a la cabeza de la serpiente\n\tfor (var i = body.length - 1; i >= 1; --i) {\n\t\tbody[i].x = body[i - 1].x; // elem i <- elem i-1\n\t\tbody[i].y = body[i - 1].y; // body[i] = body[i-1]\n\t}\n\tif (body.length >= 1) {\n\t\tbody[0].x = head.x;\n\t\tbody[0].y = head.y;\n\t}\n\n\t// actualizar las coords de la cabeza de la serpiente\n\thead.x += dx;\n\thead.y += dy;\n\t// determinamos en qué eje ha ocurrido el último movimiento\n\tif (dx !== 0) {\n\t\tlastAxis = 'X';\n\t} else if (dy !== 0) {\n\t\tlastAxis = 'Y';\n\t}\n\n\t// detectar si la serpiente ha consumido el alimento\n\tif (food && head.x === food.x && head.y === food.y) {\n\t\tfood = null;\n\t\t// aumentar el tamaño de la serpiente\n\t\tincreaseSnakeSize(prevX, prevY);\n\t}\n\n\t// generar el alimente en caso que no exista\n\tif (!food) {\n\t\tfood = randomFoodPosition();\n\t}\n}\n\nfunction checkSnakeCollision() {\n\t// coordenadas de la cabeza sean igual a las coordenadas de un elem del cuerpo\n\tfor (var i = 0; i < body.length; ++i) {\n\t\tif (head.x == body[i].x && head.y == body[i].y) {\n\t\t\treturn true;\n\t\t}\n\t}\n\n\t// verificar que la serpiente no se salga de los límites permitidos\n\tvar topCollision = head.y < 0; // x: ? , y: 0\n\tvar bottomCollision = head.y > 440; // x: ?, y: 440\n\tvar leftCollision = head.x < 0; // x: 0, y: ?\n\tvar rightCollision = head.x > 380; // x: , y: ?\n\tif (topCollision || bottomCollision || leftCollision || rightCollision) {\n\t\treturn true;\n\t}\n\n\treturn false;\n}\n\nfunction gameOver() {\n\tconsole.log('gameOver fired');\n\talert('Has perdido');\n\thead.x = 0;\n\thead.y = 0;\n\tdy = 0;dx = 0;\n\tbody.length = 0;\n}\n\nfunction increaseSnakeSize(prevX, prevY) {\n\tbody.push({\n\t\tx: prevX, y: prevY\n\t});\n}\n\nfunction randomFoodPosition() {\n\tvar position = void 0;\n\tdo {\n\t\tposition = { x: getRandomX(), y: getRandomY() };\n\t} while (checkFoodCollision(position));\n\treturn position;\n}\n\nfunction checkFoodCollision(position) {\n\t// comparar las coordenadas del alimento generado con el cuerpo de la serpiente\n\tfor (var i = 0; i < body.length; ++i) {\n\t\tif (position.x == body[i].x && position.y == body[i].y) {\n\t\t\treturn true;\n\t\t}\n\t}\n\n\t// comparar las coordenadas del alimento generado con la cabeza de la serpiente\n\tif (position.x == head.x && position.y == head.y) {\n\t\treturn true;\n\t}\n\n\treturn false;\n}\n\nfunction getRandomX() {\n\t// 0, 20, 40, ..., 380\n\t// 0, 1, 2, ..., 19       x20\n\treturn 20 * parseInt(Math.random() * 20);\n}\n\nfunction getRandomY() {\n\t// 0, 20, 40, ..., 440\n\t// 0, 1, 2, ..., 22\n\treturn 20 * parseInt(Math.random() * 23);\n}\n\nfunction draw() {\n\t// definir un fondo negro\n\tcontext.fillStyle = 'black';\n\tcontext.fillRect(0, 0, myCanvas.width, myCanvas.height);\n\n\t// cabeza\n\tdrawObject(head, 'lime');\n\t// cuerpo\n\tbody.forEach(function (elem) {\n\t\treturn drawObject(elem, 'lime');\n\t});\n\t// alimento\n\tdrawObject(food, 'white');\n}\n\nfunction drawObject(obj, color) {\n\tcontext.fillStyle = color;\n\tcontext.fillRect(obj.x, obj.y, SIZE, SIZE);\n}\n\ndocument.addEventListener('keydown', moveSnake);\n\nfunction moveSnake(event) {\n\t// las condiciones restringen el movimiento sobre el mismo eje\n\tswitch (event.key) {\n\t\tcase 'ArrowUp':\n\t\t\tif (lastAxis !== 'Y') {\n\t\t\t\tdx = 0;\n\t\t\t\tdy = -SIZE;\n\t\t\t\tconsole.log('Mover hacia arriba');\n\t\t\t}\n\t\t\tbreak;\n\t\tcase 'ArrowDown':\n\t\t\tif (lastAxis !== 'Y') {\n\t\t\t\tdx = 0;\n\t\t\t\tdy = +SIZE;\n\t\t\t\tconsole.log('Mover hacia abajo');\n\t\t\t}\n\t\t\tbreak;\n\t\tcase 'ArrowRight':\n\t\t\tif (lastAxis !== 'X') {\n\t\t\t\tdx = +SIZE;\n\t\t\t\tdy = 0;\n\t\t\t\tconsole.log('Mover hacia la derecha');\n\t\t\t}\n\t\t\tbreak;\n\t\tcase 'ArrowLeft':\n\t\t\tif (lastAxis !== 'X') {\n\t\t\t\tdx = -SIZE;\n\t\t\t\tdy = 0;\n\t\t\t\tconsole.log('Mover hacia la izquierda');\n\t\t\t}\n\t\t\tbreak;\n\t}\n}\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/principal.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/mi-modulo.js":
/*!**************************!*\
  !*** ./src/mi-modulo.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.saludar = saludar;\nexports.despedir = despedir;\nfunction saludar(nombre) {\n\treturn 'Hola ' + nombre;\n}\n\nfunction despedir(nombre) {\n\treturn 'Hasta ' + luego() + ' ' + nombre;\n}\n\nvar x = exports.x = 777;\n\nfunction luego() {\n\treturn 'luego';\n}\n\n//# sourceURL=webpack:///./src/mi-modulo.js?");

/***/ }),

/***/ "./src/principal.js":
/*!**************************!*\
  !*** ./src/principal.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _miModulo = __webpack_require__(/*! ./mi-modulo.js */ \"./src/mi-modulo.js\");\n\n// Rename named imports\nconsole.log((0, _miModulo.saludar)('Juan'));\nconsole.log((0, _miModulo.despedir)('Carlos'));\n\n// Named imports\n// import {saludar, despedir} from './mi-modulo.js'\n// console.log(saludar('Juan'));\n\n// Namespace import\n// import * as myModule from './mi-modulo.js'\n// console.log(myModule.saludar('Juan'));\n// console.log(myModule.despedir('Juan'));\n// console.log(myModule.x);\n\n//# sourceURL=webpack:///./src/principal.js?");

/***/ })

/******/ });
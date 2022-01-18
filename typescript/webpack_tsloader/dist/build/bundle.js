/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./003UseTelefono.ts":
/*!***************************!*\
  !*** ./003UseTelefono.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar Telefono_1 = __webpack_require__(/*! ./Telefono */ \"./Telefono.ts\");\r\nvar t1 = new Telefono_1.Telefono(\"Samsung\", \"Galaxy Note 8\", 1200);\r\nconsole.dir(t1);\r\n\n\n//# sourceURL=webpack://webpack_tsloader/./003UseTelefono.ts?");

/***/ }),

/***/ "./Telefono.ts":
/*!*********************!*\
  !*** ./Telefono.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.Telefono = void 0;\r\n/*export class Telefono{\r\n    marca: string;\r\n    modelo: string;\r\n    precio:number;\r\n    constructor(marca:string,modelo:string,precio:number){\r\n        this.marca = marca;\r\n        this.modelo = modelo;\r\n        this.precio = precio;\r\n    }\r\n}*/\r\n// TypeScript Class Expression\r\nvar Telefono = /** @class */ (function () {\r\n    function Telefono(marca, modelo, precio) {\r\n        this.marca = marca;\r\n        this.modelo = modelo;\r\n        this.precio = precio;\r\n    }\r\n    return Telefono;\r\n}());\r\nexports.Telefono = Telefono;\r\n\n\n//# sourceURL=webpack://webpack_tsloader/./Telefono.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./003UseTelefono.ts");
/******/ 	
/******/ })()
;
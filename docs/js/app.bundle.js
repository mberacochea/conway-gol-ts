window["ConwayGoF"] =
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cell_1 = __webpack_require__(1);
/**
 * Game Manager
 *
 * @class Game
 */
var Game = (function () {
    /**
     * Creates an instance of Game.
     * @memberof Game
     */
    function Game(x, y) {
        /**
         * Matriz of Cells
         *
         * @private
         * @type {*}@memberof Game
         */
        this.cells = new Array();
        this.canvas = document.getElementById("game");
        this.ctx = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;
    }
    /**
     * Init the game. The canvas and the cells in the canvas
     *
     * @private
     * @memberof Game
     */
    Game.prototype.init = function () {
        for (var y = 0; y < this.y; y++) {
            this.cells.push(new Array());
            for (var x = 0; x < this.x; x++) {
                this.cells[y].push(new cell_1.Cell(x, y, this.ctx));
            }
        }
    };
    /**
     * Start the game
     */
    Game.prototype.start = function () {
        var _this = this;
        var t = setInterval(function () {
            for (var y = 0; y < _this.y; y++) {
                _this.cells.push(new Array());
                for (var x = 0; x < _this.x; x++) {
                    _this.cells[y][x].render();
                }
            }
        }, 1000);
        this.interval = t;
    };
    /**
     * Stop the game
     *
     * @memberof Game
     */
    Game.prototype.stop = function () {
        clearInterval(this.interval);
    };
    return Game;
}());
exports.Game = Game;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An autonomous cell rules:
 *
 *   Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
 *   Any live cell with two or three live neighbours lives on to the next generation.
 *   Any live cell with more than three live neighbours dies, as if by overpopulation.
 *   Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
 *
 * @class Cell
 */
var Cell = (function () {
    /**
     * Creates an instance of Cell.
     * @param {number} x x position on the grid
     * @param {number} y y position on the grid
     * @memberof Cell
     */
    function Cell(x, y, ctx) {
        this.xPosition = x;
        this.yPosition = y;
        this.ctx = ctx;
        this.alive = true;
    }
    /**
     * Update the cell live status
     *
     * @param {number} neighbours The number of living neighbours
     * @returns {void}
     *
     * @memberof Cell
     */
    Cell.prototype.updateStatus = function (neighbours) {
        if (neighbours < 2) {
            this.alive = false;
            return;
        }
        if ((neighbours === 2 || neighbours === 3) && this.alive) {
            return;
        }
        if (neighbours > 3) {
            this.alive = false;
            return;
        }
        if (neighbours === 3 && !this.alive) {
            this.alive = true;
            return;
        }
    };
    /**
     * Renders the cell, this depends on the alive status
     *
     * @private
     * @returns {void}
     *
     * @memberof Cell
     */
    Cell.prototype.render = function () {
        // get position
        var xPos = this.xPosition * 5;
        var yPos = this.yPosition * 5;
        // draw
        this.ctx.fillStyle = Math.random() > 0.5 ? "yellow" : "black";
        this.ctx.fillRect(xPos, yPos, 5, 5);
    };
    return Cell;
}());
exports.Cell = Cell;


/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map
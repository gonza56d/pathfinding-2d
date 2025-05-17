"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawGrid = drawGrid;
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
function drawGrid() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

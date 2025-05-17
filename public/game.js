"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grid_1 = require("./grid");
function gameLoop() {
    (0, grid_1.drawGrid)();
    requestAnimationFrame(gameLoop);
}
gameLoop();

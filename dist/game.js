var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var time = Date.now() / 1000;
    var x = 100 + Math.sin(time) * 50;
    var y = 100 + Math.cos(time) * 50;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    requestAnimationFrame(gameLoop);
}
gameLoop();

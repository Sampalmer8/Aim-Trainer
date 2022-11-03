window.addEventListener("load", draw);

// Canvas Setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 1000;
x = 500;
y = 500;

// Movement
function draw() {
    // Circle
    ctx.fillStyle = "rgb(0, 255, 255)";
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.fill();
    requestAnimationFrame(draw);
}
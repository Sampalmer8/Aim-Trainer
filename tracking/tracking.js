// window.addEventListener("load", draw);

// // Canvas Setup
// let cnv = document.getElementById("myCanvas");
// let ctx = cnv.getContext("2d");
// cnv.width = 1000;
// cnv.height = 1000;
// x = 500;
// y = 500;

// // Movement
// function draw() {
//     // Circle
//     ctx.fillStyle = "rgb(0, 255, 255)";
//     ctx.beginPath();
//     ctx.arc(x, y, 25, 0, 2 * Math.PI);
//     ctx.fill();
//     requestAnimationFrame(draw);
// }

"use strict";

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }

    diff(other) {
        return new Vector(this.x - other.x, this.y - other.y);
    }

    scaled(factor) {
        return new Vector(this.x * factor, this.y * factor);
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

let ctx;
let canvas;
let time;
let position = new Vector(500, 500); // Pixels
let start = new Vector(Infinity, Infinity); // Pixels
let direction = new Vector(0, 0); // Pixels
let speed = 80.0; // Pixels per second
let step = 50.0; // Pixels

function tick(newTime){
    let delta = (newTime - time) / 1000.0;
    time = newTime;
    
    let distanceToCover = delta * speed;
    if (position.diff(start).length() + distanceToCover > step) {
        let angle = (Math.random() * Math.PI * 2.0) - Math.PI;
        direction = new Vector(Math.cos(angle), Math.sin(angle));
        start = position;
    }
    
    position = position.add(direction.scaled(distanceToCover));

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall(position);
    requestAnimationFrame(tick);
}

function setup() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    time = performance.now();
    tick(time);
}

function drawBall(position) {
    ctx.save();
    {
        ctx.translate(position.x, position.y);
        ctx.fillStyle = "cyan";
        ctx.beginPath();
        ctx.arc(60, 60, 15, 0, 2 * Math.PI); // head
        ctx.fill();
    }
    ctx.restore();
}
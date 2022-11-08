function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
// Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// Movement

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
let canvas = document.getElementById("myCanvas");
let time;
let position = new Vector(500, 500); // Pixels
let start = new Vector(Infinity, Infinity); // Pixels
let direction = new Vector(0, 0); // Pixels
let speed = 85.0; // Pixels per second
let step = 60.0; // Pixels

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
    if (position.x < 0) {
        position.x = 400;
    }

    if (position.y < 0) {
        position.y = 400;
    }

    if (position.x > canvas.width) {
        position.x = 400;
    }

    if (position.y > canvas.width) {
        position.y = 400;
    }
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
window.addEventListener("load", draw);

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

// Drawing and stuff

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");

cnv.width = 800;
cnv.height = 800;

function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "cyan";
  ctx.beginPath();
  ctx.arc(element.x, element.y, element.r, 0, 2 * Math.PI);
  ctx.fill();
  requestAnimationFrame(draw);
}

// 
// 
// 
// Teleporting Circle

let element = {
  x: 400,
  y: 400,
  r: 25,
}

let mouseX;
let mouseY;

      // Event Listeners & Handlers
      document.addEventListener("click", mouseclickHandler);
      
      function mouseclickHandler(event) {
          // Get rectangle info about canvas location
          let cnvRect = cnv.getBoundingClientRect(); 
      
          // Calc mouse coordinates using mouse event and canvas location info
          mouseX = Math.round(event.clientX - cnvRect.left);
          mouseY = Math.round(event.clientY - cnvRect.top);

          let circleDistance = Math.sqrt((element.x - mouseX)**2 + (element.y - mouseY)**2);
          if (circleDistance <= element.r) {
            let randX = Math.random() * (cnv.width - 100);
            element.x = randX + 50;
            let randY = Math.random() * (cnv.height - 100);
            element.y = randY + 50;
        }
      }
    
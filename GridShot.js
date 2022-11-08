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

ctx.fillStyle = "cyan";
ctx.beginPath();
ctx.arc(400, 400, 25, 0, 2 * Math.PI);
ctx.fill();
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width  = 300;
ctx.canvas.height = 400;
const shoeRight = new Image();
//adjust initial values
shoeRight.src = "/images/avatar/Shoes/Black/blackShoe2.png";

// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
console.log("ironhack-project-fullstack-webapp JS imported successfully!");
});

document.getElementById('start').addEventListener('click', function(){
  //remove the start button
  //put the rest of the buttons
  drawCurrent();
})

//add event listeners for the buttons
//add function to move around the gallery
//parameters that are combined-singular skin with nose, hair with eyebrow
//shoe, shirt, pants, hair parameters: color and style







function drawCurrent(){
  //adjust positions
  ctx.drawImage(shoeRight, 0, 0, 50, 25);
}




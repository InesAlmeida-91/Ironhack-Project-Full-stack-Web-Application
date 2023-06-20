//initial values
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width  = 300;
ctx.canvas.height = 400;
const shoeRight = new Image();
const shoeLeft = new Image();
//adjust initial values
let shoeStyle = 1;
let shoeColor=1;
shoeRight.src = `/images/avatar/Shoes/${shoeColor}Shoe${shoeStyle}right.png`;
shoeLeft.src = `/images/avatar/Shoes/${shoeColor}Shoe${shoeStyle}left.png`;

// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
// console.log("ironhack-project-fullstack-webapp JS imported successfully!");
});

document.getElementById('start').addEventListener('click', function(){
  //remove the start button
  document.getElementById('start').setAttribute('style', 'visibility: hidden');
  document.getElementById('showOnStart').setAttribute('style', 'visibility: visible');
  //put the rest of the buttons
  drawCurrent();
})

document.getElementById('nxt-shoe-sty').addEventListener('click', async function(){
  shoeStyle++;
  if(shoeStyle > 5){shoeStyle = 1;}
  shoeRight.src = `/images/avatar/Shoes/${shoeColor}Shoe${shoeStyle}right.png`;
  shoeLeft.src = await `/images/avatar/Shoes/${shoeColor}Shoe${shoeStyle}left.png`;
  drawCurrent();
})

document.getElementById('prv-shoe-sty').addEventListener('click', function(){
  shoeStyle--;
  if(shoeStyle < 1){shoeStyle = 5;}
  shoeRight.src = `/images/avatar/Shoes/${shoeColor}Shoe${shoeStyle}right.png`;
  shoeLeft.src = `/images/avatar/Shoes/${shoeColor}Shoe${shoeStyle}left.png`;
  drawCurrent();
})

document.getElementById('nxt-shoe-clr').addEventListener('click', function(){
  shoeColor++;
  if(shoeColor > 7){shoeColor = 1;}
  shoeRight.src = `/images/avatar/Shoes/${shoeColor}Shoe${shoeStyle}right.png`;
  shoeLeft.src = `/images/avatar/Shoes/${shoeColor}Shoe${shoeStyle}left.png`;
  drawCurrent();
})

document.getElementById('prv-shoe-clr').addEventListener('click', function(){
  shoeColor--;
  if(shoeColor < 1){shoeColor = 7;}
  shoeRight.src = `/images/avatar/Shoes/${shoeColor}Shoe${shoeStyle}right.png`;
  shoeLeft.src = `/images/avatar/Shoes/${shoeColor}Shoe${shoeStyle}left.png`;
  drawCurrent();
})



//add event listeners for the buttons
//add function to move around the gallery
//parameters that are combined-singular skin with nose, hair with eyebrow
//shoe, shirt, pants, hair parameters: color and style







function drawCurrent(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //adjust positions
  ctx.drawImage(shoeRight, 150, 350, 50, 25);
  ctx.drawImage(shoeLeft, 50, 350, 50, 25);
}




//initial values
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width  = 300;
ctx.canvas.height = 400;
const shoeRight = new Image();
const shoeLeft = new Image();
const skinRight = new Image();
const skinLeft = new Image();
const belt = new Image();
const pantsLeft = new Image();
const pantsRight = new Image();
//adjust initial values
let shoeStyle = 1;
let shoeColor=1;
let skinColor=1;
let beltColor = 1;
let pantsColor = 1;
let pantsStyle = 1;
shoeRight.src = `/images/avatar/Shoes/${shoeColor}Shoe${shoeStyle}right.png`;
shoeLeft.src = `/images/avatar/Shoes/${shoeColor}Shoe${shoeStyle}left.png`;
skinRight.src = `/images/avatar/Skin/${skinColor}legright.png`;
skinLeft.src = `/images/avatar/Skin/${skinColor}legleft.png`;
belt.src = `/images/avatar/Pants/${beltColor}belt${pantsColor}.png`;
pantsLeft = ``;
pantsRight = ``;

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
//Shoe Style
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
//Shoe Color
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
//Skin Color
document.getElementById('nxt-skn-clr').addEventListener('click', function(){
  skinColor++;
  if(skinColor > 8){skinColor = 1;}
  skinRight.src = `/images/avatar/Skin/${skinColor}legright.png`;
  skinLeft.src = `/images/avatar/Skin/${skinColor}legleft.png`;
  drawCurrent();
})
document.getElementById('prv-skn-clr').addEventListener('click', function(){
  skinColor--;
  if(skinColor < 1){skinColor = 8;}
  skinRight.src = `/images/avatar/Skin/${skinColor}legright.png`;
  skinLeft.src = `/images/avatar/Skin/${skinColor}legleft.png`;
  drawCurrent();
})
//Belt Color
document.getElementById('nxt-blt-clr').addEventListener('click', function(){
  beltColor++;
  if(beltColor > 4){beltColor = 1;}
  belt.src = `/images/avatar/Pants/${beltColor}belt${pantsColor}.png`;
  drawCurrent();
})
document.getElementById('prv-blt-clr').addEventListener('click', function(){
  beltColor--;
  if(beltColor < 1){beltColor = 4;}
  belt.src = `/images/avatar/Pants/${beltColor}belt${pantsColor}.png`;
  drawCurrent();
})
//Pants Style
// document.getElementById('prv-pnt-sty').addEventListener('click', function(){
//   pantsStyle++;
//   if(pantsStyle > 3){pantsStyle = 1;}
//   drawCurrent();
// })
// document.getElementById('nxt-pnt-sty').addEventListener('click', function(){
//   pantsStyle--;
//   if(pantsStyle < 1){pantsStyle = 3;}
//   drawCurrent();
// })



//add event listeners for the buttons
//add function to move around the gallery
//parameters that are combined-singular skin with nose, hair with eyebrow
//shoe, shirt, pants, hair parameters: color and style







function drawCurrent(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //adjust positions
  ctx.drawImage(skinRight, 132, 235, 48, 125);
  ctx.drawImage(skinLeft, 70, 235, 48, 125);
  ctx.drawImage(belt, 82.5, 215, 85, 30);
  ctx.drawImage(shoeRight, 150, 350, 50, 25);
  ctx.drawImage(shoeLeft, 50, 350, 50, 25);
}




//initial values
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width  = 300;
ctx.canvas.height = 400;
const shoeRight = new Image();
const shoeLeft = new Image();
const skinLegRight = new Image();
const skinLegLeft = new Image();
const skinNeck = new Image();
const skinHead = new Image();
const skinArmLeft = new Image();
const skinArmRight = new Image();
const skinHandLeft = new Image();
const skinHandRight = new Image();
const hair = new Image();
const belt = new Image();
const shirt = new Image();

// const pantsLeft = new Image();
const pantsRight = new Image();
//adjust initial values
let shoeStyle = 1;
let shoeColor=1;
let skinColor=1;
let beltColor = 1;
let pantsColor = 1;
let pantsStyle = 1;
let shirtStyle = 1;
let shirtColor = 1;
let hairStyle = 1;
let hairColor = 1;
shoeRight.src = `/images/avatar/Shoes/${shoeColor}Shoe${shoeStyle}right.png`;
shoeLeft.src = `/images/avatar/Shoes/${shoeColor}Shoe${shoeStyle}left.png`;
skinLegRight.src = `/images/avatar/Skin/${skinColor}legright.png`;
skinLegLeft.src = `/images/avatar/Skin/${skinColor}legleft.png`;
skinNeck.src = `/images/avatar/Skin/${skinColor}neck.png`;
skinHead.src = `/images/avatar/Skin/${skinColor}head.png`;
skinArmLeft.src = `/images/avatar/Skin/${skinColor}armleft.png`;
skinArmRight.src = `/images/avatar/Skin/${skinColor}armright.png`;
skinHandLeft.src = `/images/avatar/Skin/${skinColor}handleft.png`;
skinHandRight.src = `/images/avatar/Skin/${skinColor}handright.png`;
belt.src = `/images/avatar/Pants/${beltColor}belt${pantsColor}.png`;
shirt.src = `/images/avatar/Shirts/${shirtColor}shirt${shirtStyle}.png`;
hair.src = `/images/avatar/Hair/${hairColor}hair${hairStyle}.png`;
pantsLeft = ``;
// pantsRight = ``;

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
document.getElementById('nxt-shoe-sty').addEventListener('click',  function(){
  shoeStyle++;
  if(shoeStyle > 5){shoeStyle = 1;}
  shoeRight.src = `/images/avatar/Shoes/${shoeColor}Shoe${shoeStyle}right.png`;
  shoeLeft.src =  `/images/avatar/Shoes/${shoeColor}Shoe${shoeStyle}left.png`;
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
  skinLegRight.src = `/images/avatar/Skin/${skinColor}legright.png`;
  skinLegLeft.src = `/images/avatar/Skin/${skinColor}legleft.png`;
  skinNeck.src = `/images/avatar/Skin/${skinColor}neck.png`;
  skinHead.src = `/images/avatar/Skin/${skinColor}head.png`;
  skinArmLeft.src = `/images/avatar/Skin/${skinColor}armleft.png`;
  skinArmRight.src = `/images/avatar/Skin/${skinColor}armright.png`;
  skinHandLeft.src = `/images/avatar/Skin/${skinColor}handleft.png`;
  skinHandRight.src = `/images/avatar/Skin/${skinColor}handright.png`;
  drawCurrent();
})
document.getElementById('prv-skn-clr').addEventListener('click', function(){
  skinColor--;
  if(skinColor < 1){skinColor = 8;}
  skinLegRight.src = `/images/avatar/Skin/${skinColor}legright.png`;
  skinLegLeft.src = `/images/avatar/Skin/${skinColor}legleft.png`;
  skinNeck.src = `/images/avatar/Skin/${skinColor}neck.png`;
  skinHead.src = `/images/avatar/Skin/${skinColor}head.png`;
  skinArmLeft.src = `/images/avatar/Skin/${skinColor}armleft.png`;
  skinArmRight.src = `/images/avatar/Skin/${skinColor}armright.png`;
  skinHandLeft.src = `/images/avatar/Skin/${skinColor}handleft.png`;
  skinHandRight.src = `/images/avatar/Skin/${skinColor}handright.png`;
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
//Shirt Style
document.getElementById('nxt-sht-sty').addEventListener('click', async function(){
  shirtStyle++;
  if(shirtStyle > 8){shirtStyle = 1;}
  shirt.src = `/images/avatar/Shirts/${shirtColor}shirt${shirtStyle}.png`;
  drawCurrent();
})
document.getElementById('prv-sht-sty').addEventListener('click', function(){
  shirtStyle--;
  if(shirtStyle < 1){shirtStyle = 8;}
  shirt.src = `/images/avatar/Shirts/${shirtColor}shirt${shirtStyle}.png`;
  drawCurrent();
})
//Shirt Color
document.getElementById('nxt-sht-clr').addEventListener('click', function(){
  shirtColor++;
  if(shirtColor > 8){shirtColor = 1;}
  shirt.src = `/images/avatar/Shirts/${shirtColor}shirt${shirtStyle}.png`;
  drawCurrent();
})
document.getElementById('prv-sht-clr').addEventListener('click', function(){
  shirtColor--;
  if(shirtColor < 1){shirtColor = 8;}
  shirt.src = `/images/avatar/Shirts/${shirtColor}shirt${shirtStyle}.png`;
  drawCurrent();
})
//Hair Style
document.getElementById('nxt-har-sty').addEventListener('click', async function(){
  hairStyle++;
  if(hairStyle > 14){hairStyle = 1;}
  hair.src = `/images/avatar/Hair/${hairColor}hair${hairStyle}.png`;
  drawCurrent();
})
document.getElementById('prv-har-sty').addEventListener('click', function(){
  hairStyle--;
  if(hairStyle < 1){hairStyle = 14;}
  hair.src = `/images/avatar/Hair/${hairColor}hair${hairStyle}.png`;
  drawCurrent();
})
//Hair Color
document.getElementById('nxt-har-clr').addEventListener('click', function(){
  hairColor++;
  if(hairColor > 8){hairColor = 0;}
  hair.src = `/images/avatar/Hair/${hairColor}hair${hairStyle}.png`;
  drawCurrent();
})
document.getElementById('prv-har-clr').addEventListener('click', function(){
  hairColor--;
  if(hairColor < 0){hairColor = 8;}
  hair.src = `/images/avatar/Hair/${hairColor}hair${hairStyle}.png`;
  drawCurrent();
})




//add event listeners for the buttons
//add function to move around the gallery
//parameters that are combined-singular skin with nose, hair with eyebrow
//shoe, shirt, pants, hair parameters: color and style





function hairAlign(){
  if (hairStyle === 1 || hairStyle === 6 || hairStyle === 7){
    ctx.drawImage(hair, 93, 10, 75, 55);
  }
  if (hairStyle === 2 || hairStyle === 3 || hairStyle === 4){
    ctx.drawImage(hair, 93, 7, 75, 55);
  }
  if (hairStyle === 3 || hairStyle === 4){
    ctx.drawImage(hair, 93, 7, 75, 55);
  }
  if (hairStyle === 5){
    ctx.drawImage(hair, 93, 7, 82, 55);
  }
}

function drawCurrent(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //adjust positions
  ctx.drawImage(skinNeck, 97.5, 90, 65, 40);
  ctx.drawImage(skinHead, 87, 20, 85, 75);
  ctx.drawImage(skinArmLeft, 20, 95, 80, 100);
  ctx.drawImage(skinArmRight, 160, 95, 80, 100);
  ctx.drawImage(skinHandLeft, 0, 170, 40, 40);
  ctx.drawImage(skinHandRight, 220, 170, 40, 40);
  ctx.drawImage(shirt, 87.5, 95, 85, 125);
  ctx.drawImage(skinLegRight, 137, 235, 48, 125);
  ctx.drawImage(skinLegLeft, 75, 235, 48, 125);
  ctx.drawImage(belt, 87.5, 215, 85, 30);
  ctx.drawImage(shoeRight, 155, 350, 50, 25);
  ctx.drawImage(shoeLeft, 55, 350, 50, 25);
  hairAlign();
}




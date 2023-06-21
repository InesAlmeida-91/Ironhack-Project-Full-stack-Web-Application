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
const sleeveLeft = new Image();
const sleeveRight = new Image();
const hair = new Image();
const pantsLeft = new Image();
const pantsRight = new Image();
const belt = new Image();
const shirt = new Image();

//adjust initial values
let shoeStyle = 1;
let shoeColor=1;
let skinColor=1;
let beltColor = 1;
let pantsColor = 1;
let pantsStyle = 1;
let shirtStyle = 1;
let sleeveStyle = 3;
let sleeveColor = 1;
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
sleeveLeft.src = `/images/avatar/Shirts/${sleeveColor}sleeve${sleeveStyle}left.png`;
sleeveRight.src = `/images/avatar/Shirts/${sleeveColor}sleeve${sleeveStyle}right.png`;
hair.src = `/images/avatar/Hair/${hairColor}hair${hairStyle}.png`;
pantsLeft.src = `/images/avatar/Pants/${pantsColor}pants${pantsStyle}left.png`;
pantsRight.src = `/images/avatar/Pants/${pantsColor}pants${pantsStyle}right.png`;

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
  updateDrawing();
})
document.getElementById('prv-shoe-sty').addEventListener('click', function(){
  shoeStyle--;
  if(shoeStyle < 1){shoeStyle = 5;}
  updateDrawing();
})
//Shoe Color
document.getElementById('nxt-shoe-clr').addEventListener('click', function(){
  shoeColor++;
  if(shoeColor > 7){shoeColor = 1;}
  updateDrawing();
})
document.getElementById('prv-shoe-clr').addEventListener('click', function(){
  shoeColor--;
  if(shoeColor < 1){shoeColor = 7;}
  updateDrawing();
})
//Skin Color
document.getElementById('nxt-skn-clr').addEventListener('click', function(){
  skinColor++;
  if(skinColor > 8){skinColor = 1;}
  updateDrawing();
})
document.getElementById('prv-skn-clr').addEventListener('click', function(){
  skinColor--;
  if(skinColor < 1){skinColor = 8;}
  updateDrawing();
})
//Belt Color
document.getElementById('nxt-blt-clr').addEventListener('click', function(){
  beltColor++;
  if(beltColor > 4){beltColor = 1;}
  updateDrawing();
})
document.getElementById('prv-blt-clr').addEventListener('click', function(){
  beltColor--;
  if(beltColor < 1){beltColor = 4;}
  updateDrawing();
})
// Pants Style
document.getElementById('prv-pnt-sty').addEventListener('click', function(){
  pantsStyle++;
  if(pantsStyle > 3){pantsStyle = 1;}
  updateDrawing();
})
document.getElementById('nxt-pnt-sty').addEventListener('click', function(){
  pantsStyle--;
  if(pantsStyle < 1){pantsStyle = 3;}
  updateDrawing();
})
//Pants Color
document.getElementById('prv-pnt-clr').addEventListener('click', function(){
  pantsColor++;
  if(pantsColor > 12){pantsColor = 1;}
  updateDrawing();
})
document.getElementById('nxt-pnt-clr').addEventListener('click', function(){
  pantsColor--;
  if(pantsColor < 1){pantsColor = 12;}
  updateDrawing();
})
//Shirt Style
document.getElementById('nxt-sht-sty').addEventListener('click', async function(){
  shirtStyle++;
  if(shirtStyle > 8){shirtStyle = 1;}
  updateDrawing();
})
document.getElementById('prv-sht-sty').addEventListener('click', function(){
  shirtStyle--;
  if(shirtStyle < 1){shirtStyle = 8;}
  updateDrawing();
})
//Shirt Color
document.getElementById('nxt-sht-clr').addEventListener('click', function(){
  shirtColor++;
  if(shirtColor > 8){shirtColor = 1;}
  updateDrawing();
})
document.getElementById('prv-sht-clr').addEventListener('click', function(){
  shirtColor--;
  if(shirtColor < 1){shirtColor = 8;}
  updateDrawing();
})
//Sleeve Style
document.getElementById('nxt-slv-sty').addEventListener('click', async function(){
  sleeveStyle++;
  if(sleeveStyle > 3){sleeveStyle = 1;}
  updateDrawing();
})
document.getElementById('prv-slv-sty').addEventListener('click', function(){
  sleeveStyle--;
  if(sleeveStyle < 1){sleeveStyle = 3;}
  updateDrawing();
})
//Sleeve Color
document.getElementById('nxt-slv-clr').addEventListener('click', function(){
  sleeveColor++;
  if(sleeveColor > 8){sleeveColor = 1;}
  updateDrawing();
})
document.getElementById('prv-slv-clr').addEventListener('click', function(){
  sleeveColor--;
  if(sleeveColor < 1){sleeveColor = 8;}
  updateDrawing();
})
//Hair Style
document.getElementById('nxt-har-sty').addEventListener('click', async function(){
  hairStyle++;
  if(hairStyle > 14){hairStyle = 0;}
  updateDrawing();
})
document.getElementById('prv-har-sty').addEventListener('click', function(){
  hairStyle--;
  if(hairStyle < 0){hairStyle = 14;}
  updateDrawing();
})
//Hair Color
document.getElementById('nxt-har-clr').addEventListener('click', function(){
  hairColor++;
  if(hairColor > 8){hairColor = 1;}
  updateDrawing();
})
document.getElementById('prv-har-clr').addEventListener('click', function(){
  hairColor--;
  if(hairColor < 1){hairColor = 8;}
  updateDrawing();
})

function updateDrawing(){
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
  sleeveLeft.src = `/images/avatar/Shirts/${sleeveColor}sleeve${sleeveStyle}left.png`;
  sleeveRight.src = `/images/avatar/Shirts/${sleeveColor}sleeve${sleeveStyle}right.png`;
  hair.src = `/images/avatar/Hair/${hairColor}hair${hairStyle}.png`;
  pantsLeft.src = `/images/avatar/Pants/${pantsColor}pants${pantsStyle}left.png`;
  pantsRight.src = `/images/avatar/Pants/${pantsColor}pants${pantsStyle}right.png`;
  drawCurrent();
}

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
  if (hairStyle === 8){
    ctx.drawImage(hair, 93, 50, 74, 15);
  }
  if (hairStyle === 10 || hairStyle === 12 || hairStyle === 13 || hairStyle === 14){
    ctx.drawImage(hair, 93, 7, 75, 114);
  }
  if (hairStyle === 9 || hairStyle === 11){
    ctx.drawImage(hair, 93, 7, 75, 140);
  }
}
function pantsAlign(){
  if(pantsStyle === 1){
    ctx.drawImage(pantsLeft, 70, 227, 60, 130);
    ctx.drawImage(pantsRight, 130, 227, 60, 130);
  }
  if(pantsStyle === 2){
    ctx.drawImage(pantsLeft, 72, 227, 60, 100);
    ctx.drawImage(pantsRight, 128, 227, 60, 100);
  }
  if(pantsStyle === 3){
    ctx.drawImage(pantsLeft, 72, 227, 60, 80);
    ctx.drawImage(pantsRight, 128, 227, 60, 80);
  }
}
function sleeveAlign(){
  if(sleeveStyle === 1){
    ctx.drawImage(sleeveLeft, 21, 93, 85, 100);
    ctx.drawImage(sleeveRight, 155, 93, 85, 100);
  }
  if(sleeveStyle === 2){
    ctx.drawImage(sleeveLeft, 40, 96, 63, 70);
    ctx.drawImage(sleeveRight, 155, 93, 63, 70);
  }
  if(sleeveStyle === 3){
    ctx.drawImage(sleeveLeft, 60, 96, 43, 60);
    ctx.drawImage(sleeveRight, 155, 93, 43, 60);
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
  sleeveAlign();
  ctx.drawImage(shirt, 87.5, 95, 85, 125);
  ctx.drawImage(skinLegRight, 137, 235, 48, 125);
  ctx.drawImage(skinLegLeft, 75, 235, 48, 125);
  ctx.drawImage(belt, 87.5, 215, 85, 30);
  ctx.drawImage(shoeRight, 155, 350, 50, 25);
  ctx.drawImage(shoeLeft, 55, 350, 50, 25);
  pantsAlign();
  hairAlign();
}




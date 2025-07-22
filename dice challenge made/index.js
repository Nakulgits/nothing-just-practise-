var pics=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var number1=Math.floor(Math.random()*pics.length);
var number2=Math.floor(Math.random()*pics.length);
var imageone=document.getElementById("imageone");
var imagetwo=document.getElementById("imagetwo");
const btn=document.getElementsByClassName("button");
btn.addEventListener('click',()=>{
    window.location.reload();
})
imageone.src=pics[number1];
imagetwo.src=pics[number2];
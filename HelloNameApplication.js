const spanElement=document.getElementById('updateContent');
const btn=document.querySelector('button');
btn.onclick=function (){
 const yourName=prompt("please enter your name "); 
 spanElement.textContent=yourName;
}
poz=[];
var fej=document.getElementById("fej");
var targy=document.getElementById("x");
targy.style.left=randkord()[0]+"px";
targy.style.top=randkord()[1]+"px";
x=30;
y=30;
dx=30;
dy=0;
setInterval("mozgat()", 1000);

function move(e)
{   console.log(e.key);
    if(e.key=="ArrowLeft")
      {dx=-30; dy=0;}
    if(e.key=="ArrowRight")
      {dx=30;dy=0;}
    if(e.key=="ArrowUp")  
        {dy=-30;dx=0;}
    if(e.key=="ArrowDown")    
        {dy=30;dx=0;}
    fej.style.left=x+"px";
    fej.style.top=y+"px";
}
function mozgat()
{   x+=dx;
    y+=dy;
    fej.style.left=x+"px";
    fej.style.top=y+"px";

}
var koor=new Array(2);
function randkord()
{ var koor=new Array(2);
  koor[0]= 30*Math.random()* Math.floor(window.innerWidth/30);
  koor[1]=30*Math.random()*Math.floor(window.innerHeight/30);
  return koor;
}
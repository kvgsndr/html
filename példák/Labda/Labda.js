let startBtn=document.getElementById("startBtn");
    controlPanel=document.getElementById("control");
    containerPanel=document.getElementById("container");
var uto=document.getElementById("uto");
var ball=document.getElementById("ball");
    
    speed=0 ;
    pont=0;
    gyorsulas=0;
    
    x=0;
    y=0;
    dx=Math.floor(Math.random()*5)+1;
    dy=Math.floor(Math.random()*5)+1;
    ux=Math.floor(window.innerWidth/2)-50; 
    uto.style.left=ux+"px"  ;
    uto.style.top= (window.innerHeight-30)+"px";

startBtn.addEventListener("click",()=>{
    start();
});

function start()
{
    controlPanel.style.zIndex=-100
    containerPanel.style.zIndex=-10
    speed=30 ;
   
    game=setInterval(() => {
        pattogas()
    }, speed);
    
}


function pattogas()
{   x+=dx;
    y+=dy;
    gyorsulas+=1;
    if(gyorsulas==500 && dy<10)
    {
        dy>0?dy+=1: dy-=1;
        //gyorsulas=0;
        
    } 
    
    ball.style.left=x+"px";
    ball.style.top=y+"px";
    //ball.style.marginLeft=x+"px";
    //ball.style.marginTop=y+"px";
    if(x>= window.innerWidth-50-5 || x<=0) dx=-dx;
    if(y<=0 || y>=window.innerHeight-50-5) dy=-dy;
    

    //ütő ellenőrzés
    if( (y>= (window.innerHeight-30)-50) && x>ux && x<(ux+100) )
    {   dy=-dy;
        pont+=1;
        ball.innerHTML=pont;
    } 
    if(pont == 100) 
        clearInterval(game);
}

function move(e)
{
    if(e.key=="ArrowRight")
    {
        ux+=10;
        if(ux>window.innerWidth-100) ux=window.innerWidth-100-5;
    }
       
    if(e.key=="ArrowLeft")
    {
        ux-=10;
       if(ux<0) ux=0;
    }
    uto.style.left=ux+"px"  ;
}

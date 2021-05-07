function tablatatletrehoz(n)
{
    outstring="<table>"
    for(let i=1; i<=n*n;i++ )
    {    if(i%n==1)
            outstring+="<tr>";
        
        outstring+='<td id="'+i+'" onmouseover="mouseover('+i+')" onmouseout="mouseout('+i+')" onclick="csere(this.id)">'+(i==16?"":i)+'</td>';

        if(i%n==0)
             outstring+="</tr>"
    }
    outstring+="</table>"
    document.write(outstring);
    document.write('<button onclick="kever();">Kever</button>');

}
tablatatletrehoz(4); 

function kever()
{  
    var sorrend=[];
   while(sorrend.length<15)
   {   szam = 1+ Math.floor( Math.random()*15);
       if( sorrend.indexOf(szam)==-1)
            sorrend.push(szam);
   }

   for(let i=0; i<sorrend.length; i++)
    cellák[i].innerHTML=sorrend[i];
  
    üres=16;
    cellák[üres-1].innerHTML=" ";

}

var cellák=document.getElementsByTagName("td");

var üres=16;
function mouseover(n)
{
    cellák[n-1].style.backgroundColor="red";
}

function mouseout(n)
{
   cellák[n-1].style.backgroundColor="darkred";
}

function csere(n)
{   üres=parseInt(üres);
    if( (n%4!=1 && n== (üres+1) )||(n%4!=0 && n== (üres-1)) || n==(üres-4) || n==(üres+4) )
    {
        var tmp=document.getElementById(n).innerHTML;
        document.getElementById(n).innerHTML= " ";
        document.getElementById(üres).innerHTML=tmp;
        üres=n;
    }
    cellák=document.getElementsByTagName("td");
    if(ellenörzés())
        alert("SiKERÜLT MEGOLDANOD!!!");   

}


function ellenörzés()
{  
   for(let i=0; i<15;i++)
   {
       if(cellák[i].innerText != cellák[i].id)
        {   
            return false;
        }
   }
   return true;
}
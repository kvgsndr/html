var szam= parseInt( prompt("Írj be egy szamot!"));

document.writeln("A prim számok ",szam, "-ig:<br> <ol>");

for (let i=1; i<=szam; i++)
{
    prim=true;
    for(let j=2; j<= Math.floor( i/2); j++)
      if( i % j == 0)
      {
          prim=false;
          break;
      }
      if(prim) document.writeln( "<li >",i.toString().bold(),"</li>" );
}

document.writeln("</ol>")     ;

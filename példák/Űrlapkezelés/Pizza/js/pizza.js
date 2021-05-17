
       
function felvesz()
{
    var tipus= document.getElementById("tipus");
    nev= document.getElementById("termékneve");
    ar= document.getElementById("Ár");
    
    var uj=document.createElement("option");
    uj.setAttribute("value", ar.value);
    uj.innerHTML=nev.value+' - ' + ar.value + ' Ft';
    
    document.getElementById("tipus_lista").children[tipus.value].appendChild(uj);
              
}

function jobbra()
{
    var uj = document.createElement("option");
    blista=document.getElementById("tipus_lista");
    uj.innerHTML=blista[blista.selectedIndex].innerHTML;
    uj.value=blista[blista.selectedIndex].value;

    var jlist = document.getElementById("pizza_lista");
    jlist.appendChild(uj);
    ellenorzes()
}
function levesz()
{
    lista=document.getElementById("pizza_lista")
    lista.children[lista.selectedIndex].remove();
    ellenorzes()
}

function jobbraMind()
{    blista=document.getElementById("tipus_lista");
     jlist = document.getElementById("pizza_lista");
    for(let i=0; i< blista.children[1].children.length ;i++)
    {
        var uj = document.createElement("option");
        uj.innerHTML=blista.children[1].children[i].innerHTML;
        uj.value=blista.children[1].children[i].value;
        jlist.appendChild(uj);
    }
    if( document.getElementById("menu").checked)
    {
        udito=document.getElementById("udito");
        veletlen= Math.floor( Math.random()* udito.children.length);
        var uj = document.createElement("option");
        uj.innerHTML=udito.children[veletlen].innerHTML;
        uj.value=udito.children[veletlen].value;
        jlist.appendChild(uj);
    }
    ellenorzes()
}

function osszegzes()
{
    jlist = document.getElementById("pizza_lista");
    osszeg=1000;
    for(let i=0; i< jlist.children.length; i++)
        osszeg+=parseInt( jlist.children[i].value);
    return osszeg;
}

function ellenorzes()
{
    keret=document.getElementById("keretösszeg");
    if( parseInt( keret.value ) < osszegzes() )
    {
        keret.style.background="red";
    }
    else
    {
         keret.style.background="white";
    }
}

function számla()
{   var s="Pizza 1000 ft\n";
    jlista=document.getElementById("pizza_lista");
    for(let i = 0; i< jlista.length; i++ )
       s+=jlista[i].innerHTML+"\n";
    s+="\nÖsszeg: " + osszegzes() + " Ft\n";
    document.getElementsByName("message")[0].innerHTML=s;
}

function töröl()
{
    jlista=document.getElementById("pizza_lista");
    for(let i=jlista.length-1; i>=0; i--)
        jlista[i].remove();
}
 
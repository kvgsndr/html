
function plusz()
{
    document.getElementById('eredmeny').value="dfdfdsfsdf";
    alert("dfdf");
    
   /* var szam1, szam2, eredmeny;
    
    szam1=parseFloat(document.getElementById('szam1').value);
    szam2=parseFloat(document.getElementById('szam2').value);
    
    eredmeny=szam1+szam2;
    
    document.getElementById('eredmeny').value=eredmeny;*/
}

function minusz()
{
    document.getElementById('eredmeny').value="dfdfdsfsdf";
    alert("dfdf");
    
   var szam1, szam2, eredmeny;
    
    szam1=parseFloat(document.getElementById('szam1').value);
    szam2=parseFloat(document.getElementById('szam2').value);
    
    eredmeny=szam1-szam2;
    
    document.getElementById('eredmeny').value=eredmeny; 
}

function oszt()
{
    var szam1, szam2, eredmeny;
    
    szam1=parseFloat(document.getElementById('szam1').value);
    szam2=parseFloat(document.getElementById('szam2').value);
    
    eredmeny=szam1/szam2;
    
    document.getElementById('eredmeny').value=eredmeny;
}

function szor()
{
    var szam1, szam2, eredmeny;
    
    szam1=parseFloat(document.getElementById('szam1').value);
    szam2=parseFloat(document.getElementById('szam2').value);
    
      eredmeny=szam1*szam2;
    
    document.getElementById('eredmeny').value=eredmeny;
}
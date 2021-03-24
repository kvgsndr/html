
function szamol()
{
    var aoldal, boldal, coldal;
    
    aoldal=parseFloat(document.getElementById('a').value);
    boldal=parseFloat(document.getElementById('b').value);
    
    
    if(aoldal>0 && boldal>0)
    {
        coldal=Math.sqrt(Math.pow(aoldal,2)+boldal*boldal);
        document.getElementById('c').value=coldal;  
        document.getElementById('c').style.borderColor='black'; 
    } 
    else
    {
        document.getElementById('c').value='Hibás adatok!';
        document.getElementById('c').style.borderColor = 'red';
    }
}
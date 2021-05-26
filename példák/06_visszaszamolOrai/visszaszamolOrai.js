
var vakacio;

function init()
{
	vakacio = new Date("may 25, 2021 14:03:10");
	setInterval(checkTime, 1000);
}

function checkTime()
{
	var ma=new Date();
	
	var hatravan, nap, ora, perc, mperc;
	
	hatravan=vakacio.getTime()-ma.getTime();   // ms ezredmásodperc
	
	if(hatravan>0)
	{
		// másodperccé konvertálás
		hatravan/=1000;
		
		nap=kiegeszit( Math.floor(hatravan/(24*60*60)) );
		ora=kiegeszit (Math.floor( (hatravan%(24*60*60)) / (60*60) ) );
		perc=kiegeszit( Math.floor( (hatravan%(60*60)) / 60 ) );
		mperc=kiegeszit( Math.floor(hatravan%60) );
		
		document.getElementById('ora').innerHTML=nap+" nap "+ora+" ora "+perc+" perc "+ mperc+" másodperc";		
	}
	else
	{  // animáció készítése

		document.getElementById('ora').innerHTML="VAKÁCIÓ!!!";
		
		setInterval(valtoztat, 1000)
	}
		
	
	/*
	document.getElementById('ora').innerHTML="Ma UTC-ben: "+ma.getTime()+" Vakáció UTC-ben: "+vakacio.getTime()+" még "+hatravan+" másodperc van hátra.";
	*/
}

function kiegeszit(szam)
{
	if(szam<10)
		return '0'+szam;
	
	return szam;
}
var meret=10;
 function valtoztat()
 {
	var ora= document.getElementById('ora');
	 ora.style.fontSize= meret+'px';
	 meret+=5;
	 if(meret>100) meret=10;
    

 }
	
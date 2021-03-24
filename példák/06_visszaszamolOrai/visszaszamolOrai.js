
var vakacio;

function init()
{
	vakacio = new Date("June 15, 2017 14:15:20");
	setInterval(checkTime, 1000);
}

function checkTime()
{
	var ma=new Date();
	
	var hatravan, nap, ora, perc, mperc;
	
	hatravan=vakacio.getTime()-ma.getTime();
	
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
	{
		document.getElementById('ora').innerHTML="VAKÁCIÓ!!!";
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
	
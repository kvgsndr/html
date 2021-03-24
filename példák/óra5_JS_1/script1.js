
var szam;

function fgvTeszt()
{
	alert('Helo World!');
}

function novell()
{
	szam++;
	document.getElementById('szamol').innerHTML=szam;
}

function nullaz()
{
	szam=0;
	document.getElementById('szamol').innerHTML=szam;
}

function csokkent()
{
	if(szam>0)
	{
		szam--;
		document.getElementById('szamol').innerHTML=szam;
	}
	else
		alert('Túl kicsi a szám!');
}

function novell10()
{
	szam+=10;
	document.getElementById('szamol').innerHTML=szam;
}

function csokkent10()
{
	if(szam>9)
	{
		szam-=10;
		document.getElementById('szamol').innerHTML=szam;
	}
	else
		alert('Túl kicsi a szám!');
}

function negyzet()
{
	szam*=szam;
	document.getElementById('szamol').innerHTML=szam;
}
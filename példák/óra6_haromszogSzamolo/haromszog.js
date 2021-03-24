
const hegyesszogu=0;
const derekszogu=1;
const tompaszogu=2;



function szamol()
{
	var a, b, c;
	var haromszog;
	
	a=parseFloat(document.getElementById('a').value);
	b=parseFloat(document.getElementById('b').value);
	c=parseFloat(document.getElementById('c').value);
	
	
	elrejt();
	
	if(tenylegSzerkeszthetoe(a,b,c)==false)
	{
		document.getElementById('eredmeny').value='A megadott adatokból nem szerkeszthető háromszög!';
		document.getElementById('nemSzerkesztheto').style.display='inline';
	}
	else
	{
		haromszog=haromszogtipus(a,b,c);
		
		if(haromszog==hegyesszogu)
		{
			document.getElementById('eredmeny').value='Hegyesszögű';
			document.getElementById('hegyesszogu').style.display='inline';
		}
		else if(haromszog==derekszogu)
		{
			document.getElementById('eredmeny').value='Derékszögű';
			document.getElementById('derekszogu').style.display='inline';
		}
		else
		{
			document.getElementById('eredmeny').value='Tompaszögű';
			document.getElementById('tompaszogu').style.display='inline';
		}
	}
}

function szerkeszthetoe(a, b, c)
{
	if(a+b>c)
		return true;
	
	return false;
}

function tenylegSzerkeszthetoe(a, b, c)
{
	if(szerkeszthetoe(a, b, c)==false)
		return false;
	if(szerkeszthetoe(a, c, b)==false)
		return false;
	if(szerkeszthetoe(c, b, a)==false)
		return false;
	
	return true;
}

function szamolGamma(a,b,c)
{
	return Math.acos((a*a+b*b-c*c)/(2*a*b));
}

function szogtipus(a,b,c,idBe)
{
	var szog;
	
	szog=szamolGamma(a,b,c);
	
	document.getElementById(idBe).value=180*szog/Math.PI+'°';
	
	if(szog==Math.PI/2)
		return derekszogu;
	if(szog>Math.PI/2)
		return tompaszogu;
	
	return hegyesszogu;	
}

function haromszogtipus(a,b,c)
{
	var szogtipusa;
	var haromszog=hegyesszogu;
	
	// gamma
	szogtipusa=szogtipus(a,b,c,'gamma');
	if(szogtipusa==tompaszogu)
		haromszog=tompaszogu;
	else if(szogtipusa==derekszogu)
		haromszog=derekszogu;
	
	// beta
	szogtipusa=szogtipus(a,c,b,'beta');
	if(szogtipusa==tompaszogu)
		haromszog=tompaszogu;
	else if(szogtipusa==derekszogu)
		haromszog=derekszogu;
	
	// alfa
	szogtipusa=szogtipus(c,b,a,'alfa');
	if(szogtipusa==tompaszogu)
		haromszog=tompaszogu;
	else if(szogtipusa==derekszogu)
		haromszog=derekszogu;
	
	
	return haromszog;
}

function elrejt()
{
	var tomb;
	var elemszam;
	
	tomb=document.getElementsByClassName('kepek');
	elemszam=tomb.length;
	
	for(var i=0; i<elemszam; i++)
		tomb[i].style.display='none';
	
	tomb=document.getElementsByClassName('szamolt');
	elemszam=tomb.length;
	
	for(var i=0; i<elemszam; i++)
		tomb[i].value='';
}
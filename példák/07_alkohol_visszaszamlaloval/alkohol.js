
// mennyiség
const defMennyiseg=0;
const defTesttomeg=75;
const defAlkoholLebontas=0.15;

Alkoholok = {
    SOR : 0,
    BOR :1,
    PALINKA:2,
	VODKA:3,
	WHISKY:4,
	PEZSGO: 5
}


//			KISZERELÉS
/*
// 				1. módszer
const defKiszerelesSor=5, defKiszerelesBor=2, defKiszerelesPalinka=0.5, defKiszerelesVodka=0.5, defKiszerelesWhisky=0.3, defKiszerelesPezsgo=1;
 */ 
/*
//				2. módszer
Kiszereles = {
	SOR: 5,
    BOR: 2,
    PALINKA: 0.5,
	VODKA: 0.5,
	WHISKY: 0.3,
	PEZSGO: 1
}
*/

		//3.1 módszer
var defKiszerelesek = [5,2, 0.5 ,0.5 , 0.3, 1];

/*   
	// NEM JÓ
var defKiszerelesek = {
	Alkoholok.SOR: 5,
	Alkoholok.BOR: 2, 
	Alkoholok.PALINKA: 0.5,
	Alkoholok.VODKA: 0.5,
	Alkoholok.WHISKY: 0.3,
	Alkoholok.PEZSGO: 1
};
*/
/*
		3.2 módszer
var defKiszerelesek = {
	0: 5,
	1: 2, 
	2: 0.5,
	3: 0.5,
	4: 0.3,
	5: 1
	};
*/


//			AlkoholokSZÁZALÉK
var defAlkoholok = [0.04, 0.12, 0.52, 0.4, 0.4, 0.12];

var mennyisegek, kiszerelesek, alkoholok;
var testTomeg;
var debug;


function init()
{
	/*
	debug=document.getElementById('alkoholSor');
	debug.value="";
	if(mennyisegek==Alkoholok.YELLOW)
		debug.value="sárga";
	*/
	
	
	mennyisegek=document.getElementsByClassName('mennyiseg');
	kiszerelesek=document.getElementsByClassName('kiszereles');
	alkoholok=document.getElementsByClassName('alkohol');
	testTomeg=document.getElementById('testtomeg');
	
	// testtömeg beállítása
	testTomeg.value=defTesttomeg;
	//doucument.getElementById('nem').selectedIndex=0;
	
	
	// mennyiség beállítása
	for(var i=0; i<mennyisegek.length; i++)
	{
		mennyisegek[i].value=defMennyiseg;
		mennyisegek[i].min=0;
	}
	
	
	// kiszerelés beállítása
	/*
	// 1. módszer
	kiszerelesek[Alkoholok.SOR].value=defKiszerelesSor;
	kiszerelesek[Alkoholok.BOR].value=defKiszerelesBor;
	kiszerelesek[Alkoholok.PALINKA].value=defKiszerelesPalinka;
	kiszerelesek[Alkoholok.VODKA].value=defKiszerelesVodka;
	kiszerelesek[Alkoholok.WHISKY].value=defKiszerelesWhisky;
	kiszerelesek[Alkoholok.PEZSGO].value=defKiszerelesPezsgo;
	
	// 2. módszer
	kiszerelesek[Alkoholok.SOR].value=Kiszereles.SOR;
	kiszerelesek[Alkoholok.BOR].value=Kiszereles.BOR;
	kiszerelesek[Alkoholok.PALINKA].value=Kiszereles.PALINKA;
	kiszerelesek[Alkoholok.VODKA].value=Kiszereles.VODKA;
	kiszerelesek[Alkoholok.WHISKY].value=Kiszereles.WHISKY;
	kiszerelesek[Alkoholok.PEZSGO].value=Kiszereles.PEZSGO;
	*/
	
	// 3. módszer
	for(var i=0; i<kiszerelesek.length; i++)
		kiszerelesek[i].value=defKiszerelesek[i];
	
	
	// alkohol beállítása
	for(var i=0; i<alkoholok.length; i++)
		alkoholok[i].value=defAlkoholok[i]*100;
	
	
	document.getElementById('veralkohol').value='0';
	document.getElementById('lebomlas').value='0';
		
}

function szamol()
{
	var osszalkohol;
	var testtomeg2=parseFloat(document.getElementById('testtomeg').value);
	var ezrelek;
	var jozanodasiIdoOraban;
	
	osszalkohol = osszAlkoholmlben();
	ezrelek=veralkoholszint(osszalkohol, testtomeg2);
	
	jozanodasiIdoOraban=jozanodas(ezrelek);
	
	document.getElementById('veralkohol').value=ezrelek;
	document.getElementById('lebomlas').value=jozanodasiIdoOraban;
}

function osszAlkoholmlben()
{
	var osszalkohol=0;
	
	for(var i=0; i<alkoholok.length; i++)
		osszalkohol+=parseInt(mennyisegek[i].value)*parseFloat(kiszerelesek[i].value)*parseFloat(alkoholok[i].value);
	
	return osszalkohol;
	
}

function veralkoholszint(alkoholmlben, tomegem)
{
	return  ((alkoholmlben*0.8)/tomegem);
}


function jozanodas(alkoholezrelekben)
{
	return alkoholezrelekben/defAlkoholLebontas;
}


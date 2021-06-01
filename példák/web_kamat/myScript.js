function szamol(){
    var osszeg=parseInt(document.lap.penz.value);
	if(isNaN(osszeg) || osszeg <= 0){
		alert("Hibás összeget adtál meg!");
	}
	else{
		var szoveg="";
		if(osszeg >= 1000000){
			szoveg = "Nem kell kamatoztatnod az összeget,<br/> már több, mint 1 millió forintod van!";
		}else{
			var evek=0;
			while(osszeg<1000000){
				evek++;
				osszeg*=1.10;
			}
			szoveg = evek + " évig kell kamatoztatnod az összeget,<br/> hogy elérje az 1 millió forintot!";
		}
		document.getElementById("valasz").innerHTML = szoveg;
	}
}
  
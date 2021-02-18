// 10binf2  10ainf2 
var kutya= 101; 			        // ez egy fiók, amibe egy szám került
//let kutya;   //ez már sok
kutya=50;

document.write(kutya ,'<br>');  	// most a 101 szám jelenik meg
document.write(kutya+1 ,'<br>'); 	// most a 102 szám jelenik meg
document.write(kutya*2 ,'<br>'); 	// most a 202 szám jelenik meg
document.write(kutya*kutya, '<br>'); // most a 101 szám négyzete jelenik meg
document.write('<br>');

var a = 101;				     // ez egy szám (number) típusú változó
var f = 3.1415926;			     // ez is szám (tizedesPONT!)
var n = 1e4;				     // ez egy szám normálalakja (10000)
var b = 'kutya';			     // ez egy karakteres változó – aposztróf!
var cc = "füle";			    	// ez is egy karakteres változó
var ccc=`müle`;
var d = false;				        // ez egy logikai változó
document.write('K=',2*a*f,'<br>'); // művelet két számtípussal
document.write(b ,'<br>'); 		    // string kiírása
document.write(b+cc+ccc ,'<br>'); 		// két string összefűzése
document.write(d, ' ',!d,' ',d,'<br>'); 	// logikai változó és ellentettje -!negálás
document.write('<br>');

var a = 42; 				// ez egy szám (number) típusú változó
var b = 5; 				    // ez is szám
var c; 					    // ez egy nem definiált típusú változó
document.write('c=', c, '<br>'); 		// naugye, hogy nem definiált
document.write(a*2, ' ', a, '<br>'); 	// a értéke továbbra is 42
a = a + 1 ; 				            // a értékét növeld+1, így "a" értéke=43
document.write(a, ' ', a*2, '<br>'); 	// a értéke továbbra is 43
++a; 					                // ez is értékadó op. Jelentése: a=a+1
document.write(a, ' ', a*2, '<br>'); 	// a értéke 44
document.write(++a, '<br>'); 		    // a értéke 45! Először növeli, majd kiírja
document.write(a++, '<br>');		    /* a értéke 46, de 45-öt ír ki!
Ugyanis először kiírja majd utána növeli a változó értékét */
document.write('a=',a, '<br>');
--b ; 					                // ez is értékadó operátor jelentése: b=b-1
document.write('b=',b, '<br>'); 		        // b értéke 4
document.write(b--, '<br>');		    /* b=3, de 4et ír ki! Először kiírja, majd utána növeli a változó értékét */
document.write(--a * ++b, '<br>'); 	    // Ez mennyi lesz ???
a=a+b; 				                    // a változó új értéket kap
a += b; 				                // ez ugyanaz az utasítás: a= a+b
c=2;
c-=a; 					                // c = c-a
document.write('c=',c, '<br>'); 		        // ki tudod fejben számolni?
document.write('<br>');

/*A JavaScriptben hamisra (false) értékelődik ki az üres string "", 
a null, az undefined, a 0 értékű szám, a NaN értékű szám, valamint (nahát!) a logikai false. 
Az összes többi érték (beleértve az üres objektumot vagy a "0" stringet) igazat ad nekünk a 
logikai kifejezésekben. */

var szam = 123;   
var logikai       = false;   
var nem_definialt;  
var semmi         = null;  
var szoveg        = 'Helló Világ!';  
var tomb          = [];  
var objektum      = {};  
var fuggveny      = function () {alert('nohát');};

console.log("Változó tipusok:");
console.log(typeof szam);          // number  
console.log(typeof logikai);       // boolean  
console.log(typeof nem_definialt); // undefined  
console.log(typeof semmi);         // object   
console.log(typeof szoveg);        // string  
console.log(typeof tomb);          // object   
console.log(typeof objektum);      // object  
console.log(typeof fuggveny);      // function;  


if( typeof semmi =='object' )
     console.log("igen")

x= Number( prompt("Írj be valamit"));
console.log(typeof x);
console.log(x);

x=  parseInt( prompt("Írj be valamit"));
console.log(typeof x);
console.log(x);

x= parseFloat( prompt("Írj be valamit"));
console.log(typeof x);
console.log(x);



var a1= Number('5');
console.log(a1);
console.log(typeof a1);


a2 = String("ABC");
console.log(typeof a2);
console.log(a2);

a3="Stringszöveg";
console.log(typeof a3);
console.log(a3);

var a4=[4,4,4];
console.log(typeof a4);
console.log(a4);




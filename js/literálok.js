//Literálok
//egész    
//decimális  számokból áll 0 nem állhat az 1. helyen
//oktális  1. számjegy 0    012 
//hexadecimalis   0x vagy 0X kezdődik    0xff
document.write("decimális=",12,"<br>");
console.log(12,"<br>");
document.write("oktális=",012,"<br>")
console.log(012,"<br>")
document.write("hexadecimális=",0x12,"<br>")
console.log(0x12,"<br>");

//lebegőpontos
// 3.141592
//-3.4e-2    ==   -0.034
//8.3E3      ==    8300
// .3      == 0.3

// Boolean true false

// string
// "Szöveg \n második sor"
// 'Szöveg szintén'
// `Szöveg`

//speciális karakterek
/*

\b - backspace (visszalépéses törlés)
\f - lapdobás
\r - kocsivissza
\n - új sor
\\ - védett \
\" - védett " 
\' - védett '

*/

console.log("1234\b5678");
console.log("1234\f5678");
console.log("1234\r5678");
console.log("1234\n5678");
console.log("1234\\5678");
console.log("1234\"5678");
console.log("1234\'5678");

//document.writeln("<br>","1234\b5678","<br>");
//document.writeln("<br>","1234\f5678","<br>");
//document.writeln("<br>","1234\r5678","<br>");
//document.writeln("<br>","1234\n5678","<br>");
document.writeln("<br>","1234\\5678","<br>");
document.writeln("<br>","1234\"5678","<br>");
document.writeln("<br>","1234\'5678","<br>");


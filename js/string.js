var szoveg = new String("       Java Script");
document.write(szoveg, "<br>");

document.write(szoveg.anchor(),"<br>");
document.write(szoveg.big() ,"<br>");
document.write(szoveg.blink() ,"<br>");
document.write(szoveg.bold() ,"<br>");
document.write(szoveg.fixed() ,"<br>");
document.write(szoveg.italics() ,"<br>");
document.write(szoveg.small() ,"<br>");
document.write(szoveg.strike() ,"<br>");
document.write("A",szoveg.sub() ,"<br>");
document.write("A",szoveg.sup() ,"<br>");

for(let i=0; i< szoveg.length;i++)
    document.write(szoveg.charAt(i) ,"<br>");


for(let i=szoveg.length-1; i>=0;i--)
    document.write(szoveg[i] ,"<br>");


document.write(szoveg.indexOf("s") ,"<br>");// nincs kis s eredmény -1
document.write(szoveg.indexOf("S") ,"<br>");// nincs kis s eredmény  4
document.write(szoveg.indexOf("Scrip") ,"<br>");// nincs kis s eredmény 4

document.write(szoveg.lastIndexOf("a") ,"<br>");// nincs kis s eredmény 3
document.write(szoveg.link("http://www.turr.hu") ,"<br>");// nincs kis s eredmény -1

document.write(szoveg.localeCompare("Sós") ,"<br>");
// -1 kisebb
//  0 egyenlő
//  1 nagyobb

document.write(szoveg.split(" ") ,"<br>");  // J,v,Script

var elemek=szoveg.split(" ");
for(let i=0 ; i<elemek.length; i++)
    document.write( elemek[i],"<br>");   

document.write(szoveg.toLowerCase() ,"<br>");
document.write(szoveg.toUpperCase() ,"<br>");

document.write(szoveg.substring(2,8) ,"<br>");
document.write(szoveg.substr(2, 6) ,"<br>");

document.write(szoveg.valueOf(),"<br>");
document.write(szoveg,"<br>");
szoveg=szoveg.trim();
document.write(szoveg+"<br>");

document.write(  "JS".italics().bold().link("http://www.turr.hu") );
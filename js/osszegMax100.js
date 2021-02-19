// Generáljunk számokat, amíg azok összege el nem éri a 100-at.
// • Egy tömbben gyűjtsük a bekért számokat.
// • A kapott számot vizsgáljuk meg, hogy ha hozzáadnánk a tömbhöz, akkor túllépnénk-e a 100-at
//   vagy nem. Ha igen, akkor már ne adjuk hozzá és lépjünk ki a ciklusból.
// • Az eredményt konzolon jelenítsük meg.
const szazig = [];
let osszeg = 0, szam = 0;
do {
     szam = parseInt(prompt("Kérek egy számot:"));
     if(!isNaN(szam)) {
       if(osszeg + szam <= 100) {
         szazig.push(szam);
         osszeg += szam;
        } else break;
     }
} while(osszeg <= 100);
console.log("A tömb elemei: " + szazig.join(", ") + 
            "\nA számok összege: " + osszeg);
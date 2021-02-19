// Egy e-mailcím alapján határozzuk meg a címhez kapcsolódó domaint, azaz a kukac és a
// domainvégződés közötti részt.
// • Stringkezelő függvények segítségével vágjuk ki dinamikusan egy e-mail cím domain nevét.
// • A program bármilyen e-mail cím esetén működőképes kell, hogy legyen, akkor is, ha a domain
//   tartalmaz pontot.
// • Próbáljuk megoldani kétféleképpen a feladatot (indexOf(), substr() és substring() segítségével).
// • Az eredményt írjuk ki a konzolra.

let email = prompt("Kérek egy e-mail címet:"),
kukac = email.indexOf("@") + 1,
pont = email.lastIndexOf(".");
console.log("Az első megoldás: " + email.substring(kukac, pont));
console.log("A második megoldás: " + email.substr(kukac ,Math.abs(kukac - pont)));
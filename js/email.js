// Kérjünk be a felhasználótól egy e-mail címet, majd alakítsuk át védett formába a következők szerint:
// • Az e-mail cím ASCII karakterekre legyen átalakítva, ehhez használjuk a charCodeAt()-et.
// • Az egyes karaktereket ne csak ASCII kódban hagyjuk, hanem alakítsuk HTML karakterkóddá.
// Egy HTML karakterkód &# betűkkel kezdődik és pontosvesszővel véződik.
// • A bekért e-mail címet írjuk ki a konzolra és jelenítsük meg egy DIV-ben is.
const email = document.getElementById("email");
let mail = "labamkozottvanegy@gmail.com";
let encrypted = "";
for(let i=0;i<mail.length;i++) {
encrypted += "&#" + mail.charCodeAt(i) + ";";
}
email.innerHTML = encrypted;
console.log(encrypted);
document.write("<div id='digiora'></div>");
const ora = document.getElementById("digiora");
let dt;
function ido() {
dt = new Date();
ora.innerText = tiznelKisebb(dt.getHours()) + ":" +
tiznelKisebb(dt.getMinutes()) + ":" + tiznelKisebb(dt.getSeconds());
setTimeout(ido,1000);
}
function tiznelKisebb(szam) {
return szam < 10 ? "0" + szam : szam;
}
ido();
document.write("<div id='szamlalo'></div>");let mp = 60;
const szamlalo = document.getElementById("szamlalo");
const ismetel = setInterval(
    function()
     {
        szamlalo.innerText = mp--;
        if(mp < 0) clearInterval(ismetel);
      },
      1000);
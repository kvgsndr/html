sportok=["Futás","Focizás","Bringázás","Hegymászás","Lovaglás"];
sportkal=[680,550,480,420,370];
     
     function torol() 
        {   
            var inputok= document.getElementsByTagName("input")    ;
            for(let i=0; i<inputok.length; i++)
                inputok[i].value="";
        }
     function kirajzol()
     {  
       document.write("<table><tr><td>Sport, mozgás</td><td> kcal/óra </td><td> <centre>perc</centre> </td><td> kcal </td></tr>");

        for(let i =0 ;i< sportok.length; i++)
            document.write('<tr><td>'+sportok[i]+'</td><td class="kalora">'+sportkal[i]+'</td><td><input type="number" class ="perc" onkeyup="szam()" onchange="szam()"></td><td><input type="text" class ="kal" disabled=true ></td></tr>');
       document.write('<tr><td colspan="2">Összesen</td><td><input type="text" class ="perc" name="min" id="osszeg_perc" disabled=true ></td><td><input type="text" class ="kal" name="kcal" id="osszeg_kal" disabled=true></td></tr><tr><td colspan="3">Napi átlagos energiaszükségletünknek </td><td><input type="text"  id="százalek" disabled=true>%</td></tr></table><button onclick="torol()">Adatok törlése</button></center></div>');
     }
     function szam() {
            var kalora=document.getElementsByClassName("kalora");
            var kal = document.getElementsByClassName("kal");
            var perc=document.getElementsByClassName("perc");
            osszegkal=0;
            osszegperc=0;
            for(let i =0; i< kalora.length;i++)
            {  
                if(perc[i].value != "")
                {   k=parseInt( kalora[i].innerHTML );
                    p=parseInt( perc[i].value);
                    kk= k / 60 * p
                    kal[i].value=kk ;
                    osszegkal+=kk;
                    osszegperc+=p;
                    
                }
                document.getElementById("osszeg_perc").value=osszegperc;
                document.getElementById("osszeg_kal").value=osszegkal;
            }
            document.getElementById("százalek").value= (osszegkal/2000*100).toFixed(0);

            
        }

kirajzol();


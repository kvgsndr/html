
const semmi=0, osszead=1, kivon=2, szoroz=3, oszt=4;

var ujSzam, regiSzam;
var tizedes;
var kitevo;
var kijelzo;
var muvelet;

function init()
{
    kijelzo = document.getElementById('eredmenyKi');
    
    regiSzam=0;
    muvelet=semmi;
    
    initUjSzam();
}

function initUjSzam()
{
    kijelzo.value=0;
    ujSzam=0;
    tizedes=false;
    kitevo=-1;
}

function szamotNyom(szamBe)
{
    var szorzo;
    
    if(!tizedes)
    {
        ujSzam*=10;
        ujSzam+=szamBe;
    }
    else
    {
        ujSzam+=(szamBe*Math.pow(10,kitevo));
        
        // mivel a float tipus esetén az utolsó bitek nem stabilak
        //ujSzam=ujSzam.toFixed(-kitevo+1);
        //ujSzam=Math.round(ujSzam, kitevo-1);
        /*
        szorzo=Math.pow(10, -kitevo);
        ujSzam*=szorzo;
        ujSzam=Math.round(ujSzam);
        ujSzam/=szorzo;
        */
        
        //ujSzam=ujSzam.toFixed(6);
        kitevo--;     
    }
    kijelzo.value=ujSzam;
}

function tortetNyom()
{
    tizedes=true;
}

function muveletetNyom(muveletBe)
{
    muvelet=muveletBe;
    regiSzam=ujSzam;
    initUjSzam();
}

function eredmenytNyom()
{
    if(muvelet==semmi)
        kijelzo.value=ujSzam;
    else if(muvelet==osszead)
        kijelzo.value=regiSzam+ujSzam;
    else if(muvelet==kivon)
        kijelzo.value=regiSzam-ujSzam;
    else if(muvelet==szoroz)
        kijelzo.value=regiSzam*ujSzam;
    else
        kijelzo.value=regiSzam/ujSzam;    
}
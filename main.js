const prikaz1El = document.querySelector('.display-1');
const prikaz2El = document.querySelector('.display-2');
const tempRezultatEl = document.querySelector('.temp-rezultat');
const brojeviEl = document.querySelectorAll('.broj');
const operacijaEl = document.querySelectorAll('.operacija');
const jednakoEl = document.querySelector('.jednako');
const ocistiSveEl = document.querySelector('.ocisti-sve');
const brisiEl = document.querySelector('.brisi');


let prikaz1 ="";
let prikaz2 ="";
let rezultat = null;
let prethodnaOperacija ="";
let decimala = false;



brojeviEl.forEach( broj => {
    broj.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !decimala){
            decimala = true;  
        }else if (e.target.innerText === '.' && decimala){
            return;
        }
        prikaz2 += e.target.innerText;
        prikaz2El.innerText = prikaz2;
        console.log();
    });
});



operacijaEl.forEach (operacija => {
    operacija.addEventListener('click', (e) => {
        if(!prikaz2) return;
        decimala = false;
        const imeOperacije = e.target.innerText;
        if(prikaz1 && prikaz2 && prethodnaOperacija){
            matOperacija();
        }else {
          rezultat = parseFloat(prikaz2);  
        }
        ocistiPrikaz(imeOperacije);
        prethodnaOperacija = imeOperacije;
        console.log(rezultat);
    });
});

function ocistiPrikaz(operacija = " "){
    prikaz1 += prikaz2 + " " + operacija + " ";
    prikaz1El.innerText = prikaz1;
    prikaz2El.innerText = " ";
    prikaz2 = " ";
    tempRezultatEl.innerText = rezultat;
}


function matOperacija(){
    if(prethodnaOperacija === "*"){
        rezultat = parseFloat(rezultat) * parseFloat(prikaz2);
    }else if (prethodnaOperacija === '+'){
        rezultat = parseFloat(rezultat) + parseFloat(prikaz2);
    }else if (prethodnaOperacija === '-'){
        rezultat = parseFloat(rezultat) - parseFloat(prikaz2);
    }else if (prethodnaOperacija === '/'){
        rezultat = parseFloat(rezultat) / parseFloat(prikaz2);
    }else if (prethodnaOperacija === '%'){
        rezultat = parseFloat(rezultat) % parseFloat(prikaz2);
    }
}

jednakoEl.addEventListener('click', () => {
    if(!prikaz2 || !prikaz1) return;
    decimala = false;
    matOperacija();
    ocistiPrikaz();
    prikaz2El.innerText = rezultat;
    tempRezultatEl.innerText = " ";
    prikaz2 = rezultat;
    prikaz1 = " ";
});

ocistiSveEl.addEventListener('click', () => { 
    prikaz1 = "";
    prikaz2 = "";
    prikaz1El.innerText = "";
    prikaz2El.innerText = "";
    rezultat = "";
    tempRezultatEl.innerText = "";
});

brisiEl.addEventListener('click', () => {
    prikaz2El.innerText = " ";
    prikaz2 = "";
});
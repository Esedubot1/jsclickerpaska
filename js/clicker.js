let klikkaukset = 0;
let kerroin = 1;
let autoklikkerit = 0;
let usein;

function klikkaa() {
    klikkaukset += 1 * kerroin;
    document.querySelector("#klikkaukset").innerHTML = "Klikkaukset: " + klikkaukset;
}

function autoKlikkaa() {
    klikkaukset += 1;
    document.querySelector("#klikkaukset").innerHTML = "Klikkaukset: " + klikkaukset;
}

function ostaKerroin() {
    if(klikkaukset >= 100 * kerroin) {
        klikkaukset -= 100 * kerroin;
        document.querySelector("#klikkaukset").innerHTML = "Klikkaukset: " + klikkaukset;
        kerroin += 1;
        document.querySelector("#kerroinNappi").value = "Osta kerroin (" + 100 * kerroin + " klikkausta)";
    } else {
        alert("Ei tarpeeksi klikkauksia!");
    }
}

function ostaAuto() {
    if(klikkaukset >= 250) {
        klikkaukset -= 250;
        document.querySelector("#klikkaukset").innerHTML = "Klikkaukset: " + klikkaukset;
        autoklikkerit += 1;
        clearInterval(usein);
        usein = setInterval(autoKlikkaa, 1000 / autoklikkerit);
    } else {
        alert("Ei tarpeeksi klikkauksia!");
    }
}

document.querySelector("#klikkaaNappi").onclick = klikkaa;
document.querySelector("#kerroinNappi").onclick = ostaKerroin;
document.querySelector("#autoNappi").onclick = ostaAuto;
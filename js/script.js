const userAge = parseInt(prompt("Inserisci la tua età"));
const chilometri = prompt("Inserisci il numero di chilometri che vuoi percorrere");
const costoTicket = chilometri * 0.21;

if ( isNaN ( userAge ) ) {
    alert("Inserie la propria età")
}

console.log("Eta passeggero:", userAge)
console.log("Lunghezza trata:", chilometri)


if (userAge >= 18 && userAge < 65) {
    console.log("Costo intero:", costoTicket.toFixed(2));
} else if (userAge < 18) {
    let costoMinorenni = costoTicket - (costoTicket * 20 / 100);
    console.log("Prezzo bigliettto ridotto del 20%:", costoMinorenni.toFixed(2));
    alert("Aplicato sconto del 20%")
} else if (userAge >= 65){
    let costoAnziani = costoTicket - (costoTicket * 40 / 100);
    console.log("Prezzo del biglietto ridotto del 40%: ", costoAnziani.toFixed(2))
    alert("Aplicato sconto del 40%")
}

const tratta = document.getElementById("tratta")
tratta.innerHTML = chilometri;
const prezzo = document.getElementById("prezzo")
prezzo.innerHTML = costoTicket;
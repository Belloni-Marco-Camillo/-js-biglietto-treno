/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: */
const tragitto = parseInt(prompt(`inserisci i kilometri che vuoi percorrere`));
const età = parseInt(prompt(`inserisci la tua età`));
const prezzo_al_kilometro = 0.21;


/* console.log(`questi sono i km di tragitto: ` + tragitto);
console.log(`questa è l'età del passeggiero: ` + età);
console.log(`questo è il prezzo a km: ` + prezzo_al_kilometro); */



const prezzo_biglietto = tragitto * prezzo_al_kilometro;
console.log(`questo è il prezzo del biglietto ` + prezzo_biglietto);


const imponibile_minorenni = 0.20;
/* console.log(`questo è lo sconto che facciamo ai minorenni ` + imponibile_minorenni); */

const imponibile_over = 0.40;
/* console.log(`questo è lo sconto che facciamo agli over ` + imponibile_over); */

const sconto_minori = prezzo_biglietto * imponibile_minorenni;
const prezzo_minori = prezzo_biglietto - sconto_minori;
/* console.log(GetDecimalPart(prezzo_minori)); */
/* console.log(`questo è il prezzo per i minori: ` + prezzo_minori); */

const sconto_over = prezzo_biglietto * imponibile_over;
prezzo_over = prezzo_biglietto - sconto_over;
/* console.log(`questo è il prezzo per gli over: ` + prezzo_over); */



if (età < 18) {
    console.log(`il prezzo del vostro biglietto è di` + ` ` + prezzo_minori.toFixed(2) + `€`);
} else if (età > 65) {
    console.log(`il prezzo del vostro biglietto è di` + ' ' + prezzo_over.toFixed(2) + `€`);
} else {
    console.log(`il prezzo del tuo biglietto è di` + ` ` + prezzo_biglietto.toFixed(2) + `€`);
}
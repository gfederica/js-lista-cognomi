// Consegna:
// 1. chiedi all'utente il cognome
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova




// chiedere cognome
// creare array cognomi (non ordine alfabetico)
// pushare cognome nell'array dei cognomi


// stampare lista in ordine alfabetico dei cognomi 

// scrivere anche la posizione (partendo da 1) della lista in cui si trova il cognome del nuovo utente

var cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var cognome = cognomi.push(prompt("Inserisci il tuo cognome"));

cognomi.sort();
console.log(cognomi);

var i = 0;
var ordine = 1;

while ( i < cognomi.length) {
    document.getElementById("lista_cognomi").innerHTML += "<li>" + (ordine++) + ": " + cognomi[i] + "</li>";
    i++;
}



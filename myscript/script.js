// applico il metodo trovato online per invertire la parola inserita
function verifica() {
    // lego la parola
    let parola = document.getElementById("parola").value;
    // inverto la parola
    let reversed = parola.split('').reverse().join('');
    // ciclo per capire se la parola e palindroma
    if (parola == 0) {
        document.getElementById("risultato").innerHTML = "inserisci prima una parola"

    }
    else if (parola == reversed) {
        document.getElementById("risultato").innerHTML = "ze palindroma"
    }
    else (
        document.getElementById("risultato").innerHTML = "no"
    )
}
///////////////////////////////////////////////////////////////////////////////////////////////

//creo la funzione per sommare
function sommaNumeri(num1, num2) {
    const risultato = num1 + num2;
    return risultato;
}

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
//creo la funzione per pari o dispari
function PariOrDispari(num) {
    let risultato;
    if (num == 0) {
        risultato = "inserisci prima uin numero"
    }

    else if (num % 2 == 0) {
        risultato = "pari"
    }
    else {
        risultato = "dispari"
    }

    return risultato
}



function prova2() {
    // creo un numero random
    let aiNum = Math.floor((Math.random() * 5) + 1);
    // leggo inout user
    let usNum = document.getElementById("numero").value
    // richiamo la funzione di somma
    let risultato = sommaNumeri(parseInt(usNum), parseInt(aiNum))
    console.log(usNum, " + ", aiNum, " = ", risultato)
    // richiamo la funzione per pari o dispari
    let esito = PariOrDispari(risultato);
    console.log(esito)
    // leggo la scelta della scommessa
    let scelta = document.querySelector('input[name="scelta"]:checked')
    // ciclo per decidere esito scopmmessa
    if (scelta.value == esito) {
        console.log("hai vinto")
        document.getElementById("esito").innerHTML = `${usNum} + ${aiNum} = ${risultato}. ${esito} hai vinto`
    }
    else {
        console.log("hai perso")
        document.getElementById("esito").innerHTML = `${usNum} + ${aiNum} = ${risultato}. ${esito} hai perso`
    }
}

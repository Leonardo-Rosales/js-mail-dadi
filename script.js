console.log('ciao');

// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

//const email = prompt('inserisci email')


//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

    let totalePlayer = Math.floor(Math.random()*6 + 1)
    alert('lancio player:' + totalePlayer)
    let totaleComputer = Math.floor(Math.random()*6 + 1)
    alert('lancio computer:' + totaleComputer)

    if (totalePlayer > totaleComputer) {
        alert('vince player')
    } else if (totaleComputer > totalePlayer) {
        alert('vince computer')
    } else if (totalePlayer = totaleComputer) {
        alert('pareggio')
    } 

    
      



    

    
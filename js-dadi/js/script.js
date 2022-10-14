/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/




//prendo il bottone dall'html
const button = document.getElementById('button');
//aggiungo l'evento 'click' al bottone
button.addEventListener('click', function(){

    //estraggo il numero casuale
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber)
    //prendo gli output dei numeri dall'html


})

    

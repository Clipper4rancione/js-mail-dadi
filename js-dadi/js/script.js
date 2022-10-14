/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/





const button = document.getElementById('button');
const result = document.getElementById('output-result')
//aggiungo l'evento 'click' al bottone
button.addEventListener('click', function(){

    //estraggo il numero casuale per l'utente
    const randomNumberUser = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumberUser);

    //estraggo il numero casuale per il computer
    const randomNumberComputer = Math.floor(Math.random() * 6) +1;
    console.log('-------', randomNumberComputer);

    //prendo gli output dall'html
    let userNumber = document.querySelector('.output-nr-user');
    let computerNumber = document.querySelector('.output-nr-computer'); 

    //stampo il risultato in pagina
    computerNumber.innerHTML = randomNumberComputer;
    userNumber.innerHTML = randomNumberUser;
   
    //creo la condizione di vittoria
    if(randomNumberUser > randomNumberComputer){
        result.innerHTML = 'Hai vinto umano.'
    }else if(randomNumberUser < randomNumberComputer){
        result.innerHTML = '(*voce robotica*) Ha-ha-ha il...computer...vince..'
    }   

});


    

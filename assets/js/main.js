/*
Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell'indice
per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
*/

//inserire titolo
const header = document.querySelector("header");
const h1 = document.createElement("h1");
h1.append('FizzBuzzDOM');
header.append(h1);


//inserire un elemento <ul> nel main
const main = document.querySelector("main");
const ulElement = document.createElement("ul");
main.append(ulElement);

//Esegui un ciclo da 1 a 100 e stampa i numeri dentro dei list-item contenuti dentro ulElement
for (let i = 1; i <= 100; i++){
    //creo elemento list item dentro ulElement
    const liElement = document.createElement("li");
    ulElement.append(liElement);
    liElement.className = "square";

    //verifico divisibilità del numero e attribuisco rispettive classi
    if (i % 3 == 0 && i % 5 == 0){

        //sovrascrivo il contenuto del list item
        liElement.innerHTML = "fizzbuzz";
        //aggiungo rispettiva classe
        liElement.className += " " + "fizzbuzz";

    } else if (i % 3 == 0) {

        //sovrascrivo il contenuto del list item
        liElement.innerHTML = "fizz";
        //aggiungo rispettiva classe
        liElement.className += " " + "fizz";

    } else if (i % 5 == 0) {

        //sovrascrivo il contenuto del list item
        liElement.innerHTML = "buzz";
        //aggiungo rispettiva classe
        liElement.className += " " + "buzz";

    } else{

        liElement.innerHTML = i;
    }
}
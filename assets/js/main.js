/*
Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell'indice
per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
*/

//inserire titolo
let h1 = document.createElement("h1")
const header = document.querySelector("header")
h1.append('FizzBuzzDOM')
header.append(h1)


/*//inserire un elemento lista nel DOM
const ulElement = document.querySelector("main").innerHTML = "<ul></ul>"
// console.log(ulElement)

//Esegui un ciclo da 1 a 100 e stampa su una <ul> nel DOM
for (let i = 0; i <= 100; i++){
    // const liNumber = ulElement.insertAdjacentHTML('afterbegin', `<li>${i}</li>`)
    const liNumber = `<li>${i}</li>`
    console.log(liNumber)
}
*/
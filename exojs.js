// exercice2

// let nombre = parseInt(prompt('entrez votre âge'));

// if(nombre < 18){
//     alert('vous etes mineur');
// }
// else if(isNaN(nombre)){
//     alert('entré un nombre');
// }
// else if(nombre > 30){
//     alert('vous etes senior');
// }
// else{
//     alert('vous etes majeur');
// }


// // exercice1


// let nombre1 = parseInt(prompt('saisir un nombre'));
// let nombre2 = parseInt(prompt('saisir un deuxieme nombre'));

// let somme = nombre1 + nombre2;

// console.log(`La somme de ${nombre1} et ${nombre2} est ${somme}`);


// exercice 3

// let nombre = parseInt(prompt('entrez un nombre'));

// if (nombre % 2 == 0){
//     alert('le nombre est paire');
// }

// else if(nombre % 2 > 0){
//     alert('le nombre est impaire')
// }

// else {
//     alert('entrez un nombre valable')
// }


// exercice 4

// let nombre = parseInt(prompt('entrez un nombre'));

// if (nombre % 3 == 0){
//     alert('le nombre est divible par 3');
// }

// else if(nombre % 3 > 0){
//     alert('le nombre n est pas divible par 3')
// }

// else {
//     alert('entrez un nombre valable');
// }

// exercice 5

// let lettre = prompt('Saisir une lettre');

// let voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];


// if (voyelles.includes(lettre)) {
//     alert('La lettre est une voyelle');
// } 

// else if (/^[a-z]$/i.test(lettre)) {
//     alert('La lettre est une consonne');
// } 

// else {
//     alert('Saisir une lettre valide');
// }

// exercice 6

// let nombre = parseInt(prompt('entrez un nombre'));

// if(nombre > 0){
//     alert('le nombre est positif')
// }

// else if(nombre < 0){
//     alert('le nombre est négatif')
// }

// else{
//     alert('le nombre est nul')
// }

// exercice 7

// var prenom = prompt("entrez votre prénom");

// alert('Bonjour, ' + prenom + ' !Dall diam si sen BRT');


// exercice 10

let nombre1 = parseInt(prompt('entrez le premier nombre'));
let nombre2 = parseInt(prompt('entrez le deuxieme nombre'));

if(nombre1 > nombre2){
    alert('la premiere est plus grand')
}

else if(nombre1 < nombre2){
    alert('la deuxieme est plus grand')
}

else{
    alert('les nombres sont égaux')
}
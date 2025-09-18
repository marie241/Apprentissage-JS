/*let chiffre = prompt("Donne moi un chiffre entre 1 et 9");

if (chiffre % 2 == 0) {
    console.log("Paire");
}
else {
    console.log("Impaire");
} */

// let monNombre = prompt("Donne moi un nombre");

// if (monNombre % 2) {
//     console.log("Le nombre est impair");
// }else {
//     console.log("Le nombre est pair");
// }


/*let age = prompt("Quel âge as-tu ?");

if (age >= 18) { 
    console.log("Tu es majeur");
} else {
    console.log("Tu es mineur");
}*/


/*let a = prompt("Donne moi un chiffre");
let b = prompt("Donne moi un autre chiffre");

if (a > b) {
    console.log(`${a} est plus grand que ${b}`);
} else if (a < b) {
    console.log(a + " est plus petit que " + b);
} else {
    console.log(a + " est égal à " + b);
}*/

/*let mot1= "Bonjour";
let mot= prompt("Donne moi un mot");

if (mot === mot1) {
    console.log("Bravo");
} else {
    console.log("Perdu");
}*/


/*let note = prompt("Donne moi une note entre 0 et 20");

if (note >= 16) {
    console.log("Très bien");
}  else if (note < 16 &&  note >= 10) { 
    console.log("Bien");
} else if (note < 10) {
    console.log("Peut mieux faire");
}*/


/*let nombre = prompt ("donne un nombre")

if (nombre > 0) {
    console.log("c'est positif")
} else if(nombre < 0){
    console.log("c'est négatif")
} else if (nombre == 0){
    console.log("c'est null");
}*/


let username = "admin"
let password = "1234"

let connexion1 = prompt("entrez votre username")
let connexion2 = prompt("entrez votre password")

if (username != "admin" && password != "1234"){
    console.log("connexion réussie") 
} else{
    console.log("réessayez")
}
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


/*let username = "admin"
let password = "1234"

let connexion1 = prompt("entrez votre username")
let connexion2 = prompt("entrez votre password")

if (username != "admin" && password != "1234"){
    console.log("connexion réussie") 
} else{
    console.log("réessayez")
}*/

/*let n1 = prompt("donne un nombre");
let n2 = prompt("donne un autre nombre");
let op = prompt("donne une opération (+, -, *, /)");

n1 = parseFloat(n1);
n2 = parseFloat(n2);

if (isNaN(n1) || isNaN(n2)) {
    console.log("erreur : tu dois entrer des nombres valides");
} else if (op === "+") {
    console.log(n1 + n2);
} else if (op === "-") {
    console.log(n1 - n2);
} else if (op === "*") {
    console.log(n1 * n2);
} else if (op === "/") {
    if (n2 === 0) {
        console.log("erreur : division par zéro");
    } else {
        console.log(n1 / n2);
    }
} else {
    console.log("erreur : opération inconnue");
}*/
// La fonction parseFloat convertit une chaîne de caractères en un nombre à virgule flottante (nombre décimal).


let couleur = prompt("donne une couleur");

let couleur1 = "rouge";
let couleur2 = "orange";
let couleur3 = "vert";

// On convertit la saisie en minuscules
couleur = couleur.toLowerCase();

if (couleur === couleur1) {
    console.log("Arret");
} else if (couleur === couleur2) {
    console.log("prêt à partir");
} else if (couleur === couleur3) {
    console.log("C'est parti");
} else {
    console.log("erreur");
}
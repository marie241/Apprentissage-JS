/*let nom = prompt("Quel est ton nom ?");

function Bonjour(nom) {
    console.log("Bonjour ! " + nom);
}

Bonjour(nom);*/


/*let n1 = parseFloat(prompt("Entrez le premier nombre :"));
let n2 = parseFloat(prompt("Entrez le deuxième nombre :"));

function addition(n1, n2) {
    return n1 + n2;
}

addition(); 

console.log(addition(n1, n2));*/


/*let n1 = parseFloat(prompt("Entrez le premier nombre :"));

function carre(n1) {
    return n1 * n1;
}   

console.log(carre(n1));*/


/*let n1 = parseFloat(prompt("Entrez le premier nombre :"));

function aireCercle(n1) {
    return 3.14*(n1*n1);
}

console.log(aireCercle(n1))*/


/*let n1 = parseFloat(prompt("Entrez le premier nombre :"));
let n2 = parseFloat(prompt("Entrez le deuxième nombre :"));

function chiffres(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        console.log("erreur : tu dois entrer des nombres valides");
    } else if  (n1 > n2) {
        console.log(n1 + " est plus grand que " + n2);
    } else if (n1 < n2) {
        console.log(n2 + " est plus grand que " + n1);
    } else {
        console.log("les deux nombres sont égaux");
    }   
}

chiffres(n1, n2);*/


/*let mot = prompt("Entrez un mot :");

function palindrome(mot) {
    let motInverse = mot.split('').reverse().join(''); 
    if (mot === motInverse) {
        console.log(mot + " est un palindrome");
    } else {
        console.log(mot + " n'est pas un palindrome");
    }   
}

palindrome(mot);*/


/*let nbr = parseInt(prompt("Entrez un nombre :"));
let nbr1 = parseFloat(prompt("Entrez un deuxième nombre :"));

function mult(nbr, nbr1)  {
    return nbr * nbr1;
}
console.log(mult(nbr, nbr1));*/

let nbr = parseFloat(prompt("Entrez un nombre :"));

function cont (nbr) {
    let conter = 0;
    return function() {
        conter++;
        console.log("Le nombre " + nbr + " a été utilisé " + conter + " fois.");
    }
}

let c = cont(nbr);

compteur = cont(c(nbr));
compteur = cont(c(nbr));
compteur = cont(c(nbr));





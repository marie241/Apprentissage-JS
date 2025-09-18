// Crée deux variables a = 10 et b = 5, 
// additionne-les dans une troisième variable resultat puis affiche le résultat.

/*let a = 10;
let b = 5;
let resultat = a + b;
console.log(resultat); // Affiche 15  
*/

// exo 3 =========================

// Crée une variable compteur avec la valeur 0.
// Ajoute 1 trois fois (sans boucle), puis affiche sa valeur finale.

/* let compteur = 0;
compteur = compteur + 1;
compteur = compteur + 1;
compteur = compteur + 1;    
console.log(compteur); // Affiche 3 */


// exo 4 =========================
// Crée deux variables prenom = "Alice" et age = 20.
// Affiche dans la console :

// "Bonjour, je m'appelle Alice et j'ai 20 ans."

/*let prenom = "Alice";
let age = 20;
console.log("Bonjour, je m'appelle " + prenom + " et j'ai " + age + " ans.");
// Affiche la même chose avec les backticks (``) et l'interpolation (${variable}).
console.log(`Bonjour, je m'appelle ${prenom} et j'ai ${age} ans.`);*/

// exo 5 =========================

// Crée deux variables longueur = 10 et largeur = 5.
// Calcule l’aire (longueur * largeur) et affiche-la.

/*let longueur = 10;
let largeur = 5;
let aire = longueur * largeur;
console.log(aire); // Affiche 50
*/

// exo 6 =========================

// Crée deux variables x = 5 et y = 10.
// Échange leurs valeurs sans réécrire directement x = 10 et y = 5.


/*let x = 5;
let y = 10;
let temp = x;
x = y;
y = temp;
console.log(x); // Affiche 10
console.log(y); // Affiche 5 */


// exo 7 =========================

// Crée une variable dollars = 50.
// Convertis-la en euros avec le taux 1$ = 0.92€.
// Affiche le résultat avec 2 décimales.
// 👉 Indice : toFixed(2).

/*let dollars = 50;
let euros = dollars * 0.92;
console.log(euros.toFixed(2)); // Affiche 46.00*/

// exo 8 =========================

// Variables dynamiques
// Demande à l’utilisateur (via prompt) son prénom et son âge.
// Stocke-les dans des variables et affiche le dans la console :

// "Bonjour, je m'appelle [prénom] et j'ai [âge] ans."      
// let prenom = prompt("Quel est ton prénom ?");
// let age = prompt("Quel âge as-tu ?");
// console.log(`Bonjour, je m'appelle ${prenom} et j'ai ${age} ans.`); 
// Affiche la même chose avec les backticks (``) et l'interpolation (${variable}).
// console.log("Bonjour, je m'appelle " + prenom + " et j'ai " + age + " ans.");

// exo 9 =========================

// Déclare une constante PI = 3.14159.
// Essaie de la modifier et observe l’erreur.
// Puis fais la même chose avec let pour voir la différence.

/*const PI = 3.14159;
// PI = 3.14; // EErreur : une constante ne peut pas être modifiée
let radius = 5; 
radius = 10; // Pas d'erreur, la variable peut être modifiée.
console.log(radius); // Affiche 10*/

// exo 10 =========================

// Crée une variable score = 0.
// Ajoute 10 points
// Multiplie le score par 2
// Soustrais 5
// Affiche le résultat final
// Objectif : comprendre l’importance des opérateurs combinés (+=, *=, -=).

/*let score = 0;
score += 10;        
score *= 2;
score -= 5;
console.log(score); // Affiche 15*/




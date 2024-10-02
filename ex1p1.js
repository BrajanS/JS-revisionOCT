// Déclaration de variables et opérateurs
let a = 1;
let b = 2;

let Somme = a+b;
let Soustraction = a-b;
let Multiplication = a*b;
let Division = a/b;

// Conditions 
if(a%2==0){
    console.log("A est Pair");
} else {console.log("A est Impair")}

if(b%2===0){
    console.log("B est Pair");
} else {
    console.log("B est Impair");
}
// Boucles For
let nb=0;
for (let nombre=0; nombre < 10; nombre++) {
    nb++;
    console.log(nb);
}
// Fonctions
function something(argument1,argument2) {
    argument1 = "Arg1";
    argument2 = "Arg2";
    return argument1, argument2;
}
// Fonction avec une condition
let k = 100;
function whatNumber(num){

    let numEtat;
    if(num>0){
        numEtat = "Positif";
    } else if(num == 0){
        numEtat = "Zéro";
    } else if(num<0){
        numEtat = "Négatif";
    } else (numEtat = "This is not a Number")
    return numEtat;
}
console.log(whatNumber(k));

// Tableaux
const Jours = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"]

console.log(Jours[2]);
// Boucles et tableaux
const arrayElements = ["e1","e2","e3","e4","e5"];

arrayElements.forEach(e => {console.log(e);});
// Tableau: somme des éléments
const arrayNums = [1,2,3,4,5,6,7,8,9]
function result(x){
    let Sum = 0;
    let resultat;
    for(let i=0; i<x.length; i++){
        Sum = Sum+x[i];
        resultat = Sum; 
    }
    return resultat;
}
console.log("Somme des éléments de arrayNums: ",result(arrayNums));
// Tableau: maximum
function maximum(max){
    let findMax=0;
    for(let i=0; i<max.length; i++){
        if(findMax<max[i]){
            findMax = max[i]
        }
    }
    return findMax;
}
console.log(`Nombre le plus élevée de arrayNums:`,maximum(arrayNums));
// Tableau: doublons
const randomWords = ["Hi","Hi","bye","why"]
function doublons(xArray){
    const dups = [];
    for(let i=0; i<xArray.length; i++){
        if(xArray.sort()[i] === xArray.sort()[i+1]){
            dups.push(xArray.sort()[i])
        }
    }
    return dups;
}
console.log(doublons(randomWords));

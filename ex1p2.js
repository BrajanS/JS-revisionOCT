// Fonction annonyme
const addition = function(x,y){
    return x+y;
}
console.log("Addition:",addition(9,6));

// Fonction fléchée
const produit = (x,y)=>{
    return x*y;
}
console.log("Produit:",produit(6,9));
// Object simple
const personne = {
    nom:"Jean",
    age:25,
    profession:"manager"
}
for(let prop in personne){
    console.log(prop);
}
console.log(personne.nom);
// Ajout de propriétées
personne.prenom = "Luc";
console.log(personne);
// Suppression de propriétés
delete personne.age
console.log(personne);
// Tableaux d'objects
const livres = [
    {
        titre:'Le seigneur des anneaux',
        auteur:'J.R.R'
    },{
        titre:'Les misérables',
        auteur:'V. Hugo'
    },{
        titre:"L'étranger",
        auteur:"Albert Camus"
    }
]

livres.forEach(livre => {
    console.log(livre.titre+" "+livre.auteur);    
});
// Recherche dans une chaîne
function rechercher(chaine, sous_chaine){
    if(chaine.includes(sous_chaine)){
        console.log("Trouvé");
    }else {
        console.log("Pas trouvé");
    }
}
rechercher('Bonjour tous le monde','le monde')
// Remplacement de caractères
console.log("Bonjour tous le monde".replaceAll(' ','_'));
// Conversion de majuscules/minuscules
console.log("Bonne soirée tous le monde".toUpperCase());
console.log("Bonne soirée tous le monde".toLowerCase());
// Evenements (DOM)
// let btn = document.createElement('button')
// btn.innerText = 'Alert'
// btn.setAttribute('id','id_btn')
// document.body.appendChild(btn)

// Timer avec setTimepit()
const delayVal = 2000 //Miliseconds
setTimeout(()=>{
    console.log(`Delayed by ${delayVal}: HI!`);
},delayVal)
//Timer avec setInterval()
let i = 0;
// const interval = setInterval(()=>{
//     i++;
//     console.log("number:",i);
// },1500)

//Interruption de setInterval(), dans le index.html

const nombres = [1,2,3,4,5,6,7,8,9]
console.log("nombres:",nombres);
const doubles = nombres.map(nb => (nb*2))
console.log("doubles:",doubles);
const pairs = nombres.filter(pair=>(pair%2===0))
console.log("pairs:",pairs);
const firstTenPlus = doubles.find(ten=>(ten>10))
console.log("firstTenPlus:",firstTenPlus);
nombres.forEach(element => {
    console.log(`ForEach (pour nombres):`,element);
});
console.log("Includes 8 (nombres): ",nombres.includes(8))
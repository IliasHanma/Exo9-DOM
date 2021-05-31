// >*En utilisant querySelector et querySelectorAll, sert toi des class du fichier style.css et 
// rien d'autre !
// >*Cherche des methodes pour résoudre les énoncés suivants :*



// ## Partie 1 Ajout de contenu


// ### 1. Dans le h1 ajoute le texte suivant : Les attributs class et id

let h1 = document.querySelector('h1');
h1.innerText = "les attributs class et id";

// ### 2. Dans le premier h2 ajoute le texte suivant : Exercice 2 partie A
let h2 = document.querySelector('h2');
h2.innerText = "Exercice 2 partie A";
console.log(h2);
// ### 3. Dans le second h2 ajoute le texte suivant : Exercice 2 partie B
let secondH2 = document.querySelectorAll('h2')[1];
secondH2.innerText = "Exercice 2 partie B";

// ### 4. Dans le premier p ajoute le texte suivant(attention a conserver les balises) :
//   L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> 
let firstP = document.querySelector('p');
firstP.innerText = "L'ajout de class et d'ID est assez <i>simple</i>, il suffit de connaitre les methodes <b>par coeur</b>";

// ### 5. Dans le second p ajoute le texte suivant(attention a conserver les balises) : 
//   La manipulation de l'attribut Style peut-être une <i>solution</i> rapide

let secondP = document.querySelectorAll('p')[1];
secondP.innerText = " La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";




// ## Partie 2.1 Ajout d'attribut et de leurs valeurs


// ### 6. Rajoute l'attribut id dans le h1 et donne lui la valeur "bigTitle"
let idH1 = document.querySelector('h1');
idH1.setAttribute('id','bigTitle');
// ### 7. Rajoute l'attribut class a la div avec comme valeur "container"
let div = document.querySelector('div');
div.setAttribute('class','container');
// ### 8. Aux h2 ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "title"
let classH2 = Array.from(document.querySelectorAll('h2'));

classH2.forEach(element => {
    element.setAttribute('class','title');
});

// ### 9. Aux p ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "text"

let classP = Array.from(document.querySelectorAll('p'));

classP.forEach(element => {
    element.setAttribute('class','text');
});



// ## Partie 2.2 Ajout d'attribut et de leurs valeurs


// ### 10. Dans la première section ajoute l'attribut class et les class suivantes :
//  margin-bottom border-black padding
let firstSection = document.querySelector('section');
firstSection.setAttribute('class','margin-bottom border-black padding');
// ### 11. Dans la seconde section ajoute l'attribut class et les class suivantes : 
// margin-top border-black padding
let secondSection = document.querySelectorAll('section')[1];
secondSection.setAttribute('class','margin-top border-black padding');
// ### 12. Dans la div ayant comme parent une section, ajoute l'attribut style et
//  fait en sorte qu'il ait un fond bleu, une bordure de ton choix, une hauteur de 20px et 
//  une largueur de 20px

 let divEnfant = document.querySelectorAll('div')[1];
 divEnfant.setAttribute('style','background-color : blue; border: solid 3px black; height: 20px; width: 20px');
 console.log(divEnfant);

// let agimlaSection = document.querySelectorAll("section")[1].lastElementChild;
// console.log(agimlaSection);
// agimlaSection.setAttribute("style", "background-color : blue; border : solid 3px black; height : 20px; width : 20px");
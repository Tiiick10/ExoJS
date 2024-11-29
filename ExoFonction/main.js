// Exo 1

function addition(x,y) {

    console.log(x+y)
    
}

addition(31575, 2685)

// Exo 2

function soustraction(x,y) {

    console.log(x-y)

}

soustraction(31575, 2685)

// Exo 3 

function multiplication(x,y) {

    console.log(x*y)

}

multiplication(31575, 2685)

// Exo 4

function division(x,y) {

    console.log(x/y)

}

division(31575, 2685)

// Exo 5

function modulo(x,y) {

    console.log(x%y)

}

modulo(5,3)

// Exo 6

function carre(x) {

    let carre = Math.sqrt(x)

    console.log(carre)

}

carre(121)

// Exo 7

function exposant(x, y) {

    let resultat = Math.pow(x, y)

    console.log(resultat)
    
}

exposant(5, 11)

// Exo 8

function capitalize(x) {

    x = x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()

    console.log(x)
}

capitalize("coucou")

// // Exo 9

// function calcul() {

//     let nbr1 = parseFloat(prompt("Entrez un 1er nombre"))

//     let operator = prompt("Entrez un opérateur (+ - * /)")

//     let nbr2 = parseFloat(prompt("Entrez un second nombre"))

//     if (isNaN(nbr1) || isNaN(nbr2)) {

//         console.log("Veuillez entrer des nombres valides.")

//         return

//     }

//     switch (operator) {

//         case "+":
//             console.log("Résultat :", nbr1 + nbr2)
//             break

//         case "-":
//             console.log("Résultat :", nbr1 - nbr2)
//             break

//         case "*":
//             console.log("Résultat :", nbr1 * nbr2)
//             break

//         case "/":
//             if (nbr2 === 0) {
//                 console.log("Erreur : division par zéro !")

//             } else {

//                 console.log("Résultat :", nbr1 / nbr2)

//             }

//             break

//         default:

//             console.log("Opérateur invalide. Utilisez +, -, *, ou /.")
            
//     }

// }

// calcul()



// // Exo 1

// function reverseNumber() {

//     let number = prompt("Entrez un nombre de 2 chiffres minimum :")
    
//     if (isNaN(number)) {
//         console.log("Veuillez entrer un nombre valide.")
//         return;
//     }
    
//     let isNegative = false

//     if (number < 0) {

//         isNegative = true

//         number = Math.abs(number)

//     }
    
//     let reversed = number.toString().split("").reverse().join("")
    
//     reversed = parseInt(reversed)

//     if (isNegative) {

//         reversed = -reversed

//     }
    
//     console.log("Nombre inversé :", reversed)
// }

// reverseNumber()


// // Exo 2

// function par2(x) {

//     switch (x % 2 === 0) {

//         case true:
//             console.log("Le nombre est divisible par 2")
//             break

//         case false:
//             console.log("Le nombre n'est pas divisible par 2")
//             break

//         default:
//             console.log("Entrez un nombre svp")

//     }

// }

// par2(10)

// Exo 3

function logIn() {

    let password

    do {

      password = prompt("Entrez votre mot de passe :")

    } while (password !== "mdp")
    
    alert("Vous êtes connecté")

  }
  
  logIn()

// Exo Bonus

let codingSchoolX = []

function ajouterPersonne() {

  let nom = prompt("Entrez le nom à ajouter :")

  if(nom) {

    codingSchoolX.push(nom)

    console.log(`${nom} a été ajouté. Liste actuelle :`, codingSchoolX)

  } else {

    console.log("Nom invalide.")

  }

}


function retirerPersonne() {

  let nom = prompt("Entrez le nom à retirer :")

  let index = codingSchoolX.indexOf(nom)

  if(index !== -1) {

    codingSchoolX.splice(index, 1)

    console.log(`${nom} a été retiré. Liste actuelle :`, codingSchoolX)

  } else {

    console.log(`${nom} n'est pas dans la liste.`)

  }

}

function menu() {

  let choix

  do {
    choix = prompt("Choisissez une action :\n1 - Ajouter une personne\n2 - Retirer une personne\n3 - Quitter")

    switch(choix) {

      case '1':
        ajouterPersonne()
        break

      case '2':
        retirerPersonne()
        break

      case '3':
        console.log("Au revoir")
        break

      default:
        console.log("Choix invalide.")

    }

  } while (choix !== '3')

}

menu()


  
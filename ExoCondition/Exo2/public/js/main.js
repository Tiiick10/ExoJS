// Exo 1

let num1 = parseFloat(prompt("Entrez un premier nombre :"))
let num2 = parseFloat(prompt("Entrez un deuxième nombre :"))
let estEgal = num1 === num2
alert(`Le nombre ${num1} et le nombre ${num2} sont-ils égaux ? : ${estEgal}`)

// Exo 2

let numA = parseFloat(prompt("Entrez un premier nombre :"))
let numB = parseFloat(prompt("Entrez un deuxième nombre :"))
let estPlusPetit = numA < numB
alert(`Le nombre ${numA} est-il plus petit que le nombre ${numB} ? : ${estPlusPetit}`)

// Exo 3

let numX = parseFloat(prompt("Entrez un premier nombre :"))
let numY = parseFloat(prompt("Entrez un deuxième nombre :"))
let numZ = parseFloat(prompt("Entrez un troisième nombre :"))
let sommeEstPlusGrande = numX + numY > numZ
alert(`La somme du nombre ${numX} + le nombre ${numY} est-elle plus grande que le nombre ${numZ} ? : ${sommeEstPlusGrande}`)

// Exo 4

let phrase = prompt("Entrez une phrase :")
let estimation = parseInt(prompt("Combien de caractères pensez-vous que contient la phrase ?"), 10)
let longueurReelle = phrase.length

if (estimation === longueurReelle) {
  alert("Bravo, votre estimation est correcte !")
} 

else {
  let ecart = Math.abs(estimation - longueurReelle)
  alert(`Incorrect, tu étais à ${ecart} unités de la bonne réponse !`)
}

// Exo 5

let prenom

do {
  prenom = prompt("Quel est votre prénom ?")

  if (!prenom) {
    alert("Attention, vous devez remplir le champ ci-dessous !")
  }
  
} while (!prenom)

alert(`Bonjour, ${prenom}`)

// Exo 6

let veutSAbonner = confirm("Voulez-vous vous abonner ?")

if (veutSAbonner) {
  let formule = prompt("Quelle formule souhaitez-vous choisir ? (Luxe ou Normal)")
  if (formule && formule.toLowerCase() === "luxe") {
    alert("Félicitations, vous avez choisi la formule Luxe !")
  } else if (formule && formule.toLowerCase() === "normal") {
    alert("Merci pour votre abonnement.")
  } else {
    let estSur = confirm("Êtes-vous sûr de ne pas vouloir répondre ?")
    if (estSur) {
      alert("C'est dommage, passez une bonne journée !")
    } else {
      formule = prompt("Quelle formule souhaitez-vous choisir ? (Luxe ou Normal)")
      if (formule && formule.toLowerCase() === "luxe") {
        alert("Félicitations, vous avez choisi la formule Luxe !")
      } else if (formule && formule.toLowerCase() === "normal") {
        alert("Merci pour votre abonnement.")
      }
    }
  }
} else {

  alert("D'accord, bonne journée !")
}

// Exo 7 

let question1 = prompt("Quelle est la capitale de la France ?")
let question2 = prompt("Combien font 3 * 3 ?")
let reponse1 = "Paris"
let reponse2 = "9"

if (question1 === reponse1 && question2 === reponse2) {
  alert("Félicitations, vous avez répondu correctement à toutes les questions !")
} else if (question1 === reponse1 || question2 === reponse2) {
  let incorrecte = question1 !== reponse1 ? "question 1" : "question 2"
  alert(`Presque ! Vous avez eu tort à la ${incorrecte}.`)
} else {
  alert("Désolé, vous avez échoué.")
}

// Exo 8 

let age = parseInt(prompt("Quel est votre âge ?"), 10)
if (age < 0) {
  alert("Vous n’êtes même pas nés, n’essayez pas de tricher !")
} else if (age > 100) {
  alert("Vous êtes encore vivant ? Évitez de voir ce film pour le rester.")
} else if (age === 18) {
  alert("Vous pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant.")
} else if (age >= 18) {
  alert("Vous êtes majeur, vous pouvez réserver.")
} else {
  alert("Vous êtes mineur, l’accès est réservé aux grands.")
}

// Exo 9 

let estRiche = prompt("Est-ce que vous êtes riche ?").toLowerCase() === "oui"
let veutVacances = prompt("Voulez-vous partir en vacances ?").toLowerCase() === "oui"
let aChat = prompt("Est-ce que vous avez un chat ?").toLowerCase() === "oui"

if (!veutVacances) {
  alert("Pas de problème, ne partez pas en vacances.")
} else if (!estRiche || aChat) {
  alert("Même si vous le voulez, vous ne pouvez pas partir.")
} else if (estRiche && !aChat) {
  alert("Vous pourriez partir en vacances si vous le voulez.")
} else if (estRiche && !aChat && veutVacances) {
  alert("Tout est parfait, partez en vacances !")
} else {
  alert("Vérifiez vos choix.")
}

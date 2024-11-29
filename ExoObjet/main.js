// Exo 1

let me = {

    nom: "Cange",
    prenom: "Fabian",
    age: 28,
    taille: 1.87,

}

console.log(me.age)

// Exo 2

let perso2 = {

    nom: "Vandewiele",
    prenom: "Alex",
    age: 30,
    taille: 1.72,
}

let perso3 = {

    nom: null,
    prenom: null,
    age: null,
    taille: null,
}

console.log(perso2)
console.log(perso3)

// Exo 3

perso3.nom = me.nom
perso3.prenom = me.prenom
perso3.age = perso2.age
perso3.taille = perso2.taille

console.log(perso3)

// Exercice 4

let personnage = {

    nom: "Kule",
    prenom: "Jean",

    sePresenter: function() {

      console.log(`Bonjour, je m'appelle ${this.nom} ${this.prenom}`)

    }

  }
  
  personnage.sePresenter();
  
// Exercice 5

  let personne = {

    nom: "Alice",
    age: 25, 

    changerAge: function() {

      this.age = prompt("Entrez votre âge :")

      alert(`Nom : ${this.nom}, Âge : ${this.age}`)

    }

  }
  
  personne.changerAge()
  
// Exercice 6

  let Francois = {

    nom: "Francois",

    panier: ["huile", "pain", "sel"],

    derobe: function(victime) {
      
      let alimentsDerobes = victime.panier.splice(-2)

      this.panier = this.panier.concat(alimentsDerobes)

    }

  }
  
  let Sergio = {

    nom: "Sergio",

    panier: ["tomate", "lait", "poulet", "pomme"]

  }
  
  Francois.derobe(Sergio)
  
  console.log("Panier de Francois :", Francois.panier)
  console.log("Panier de Sergio :", Sergio.panier)
  
// Exercice 7

  let vieille_dame = {

    age: 85,
    nom: {
      prenom: "Jacqueline",
      nomFamille: "Durand"
    },

    moral: "mal",
    objet: "canne",

    parler: function() {

      if (this.moral === "mal") {

        alert(`Vous me dérangez et je vous frappe avec ma ${this.objet} !`)

      } else {
        alert(`Bonjour, je suis ${this.nom.prenom} ${this.nom.nomFamille}.`)

      }

    }

}
  
  let vieil_homme = {

    nom: "Jean-Yves",

    adoucir: function() {
      vieille_dame.moral = "bien"

    }

  }
  
  vieille_dame.parler()
  vieil_homme.adoucir()
  vieille_dame.parler()
  


// Initialisation du tableau vide

let tableau = []

// Boucle pour ajouter des éléments au tableau

while (tableau.length < 3) {

  let element = prompt("Ajoute un élément au tableau :")
  tableau.push(element)
}

// Affiche une alerte avec le contenu du tableau une fois qu'il y a 3 éléments

alert(`Le tableau contient : ${tableau.join(", ")}`);

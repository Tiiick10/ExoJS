let String = prompt("Choisis un mot et vérifions si il existe dans mon tableau :")
let array = ['Noob', 'DBZ', 'Dawson', 'El Fab', 'Proute']

let présence = (array.indexOf(String) !== -1) ? `${String} est présent` : `${String} n'est pas présent`

let nbr1 = parseInt(prompt("Premier nombre :"))

let operateur = prompt("Opérateur (+, -, *, /) :")

let nbr2 = parseInt(prompt("Deuxième nombre :"))


switch (operateur) {

    case "+":

        alert(`${nbr1} + ${nbr2} = ${nbr1 + nbr2}`)

        break

    case "-":

        alert(`${nbr1} - ${nbr2} = ${nbr1 - nbr2}`)

        break

    case "*":

        alert(`${nbr1} * ${nbr2} = ${nbr1 * nbr2}`)

        break

    case "/":

        if (nbr2 !== 0) {

            alert(`${nbr1} / ${nbr2} = ${nbr1 / nbr2}`)

        } else {
            alert("Erreur : Division par zéro !")
        }

        break

    default:

        alert("Non valide !")
}
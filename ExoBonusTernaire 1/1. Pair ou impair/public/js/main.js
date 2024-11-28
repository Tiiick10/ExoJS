let userInput = prompt("Choisis un nombre :")

let number = parseInt(userInput, 10)

function checkOddOrEven(number) {

    if (number % 2 === 0) {
        return "Nombre pair"
    } else {
        return "Nombre impair"
    }
}


alert(checkOddOrEven(number))
// $(selector).action()

let playerOne = 'x'
let playerTwo = 'o'

let playerOneTurn = true

function makeMove (element) {
    if (playerOneTurn) {
        activePlayer = playerOne
        playerOneTurn = false
    }

    else if (!playerOneTurn) {
        activePlayer = playerTwo
        playerOneTurn = true
    }

    console.log(playerOneTurn)
    console.log(activePlayer)
    $(element).text(activePlayer);
}






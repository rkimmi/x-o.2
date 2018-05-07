// $(selector).action()

let playerOne = 'x'
let playerTwo = 'o'

let playerOneTurn = true

function makeMove (element) {

    if ( $(element).is(':empty') && (playerOneTurn)) {
        activePlayer = playerOne
        playerOneTurn = false
    }
    else if ( $(element).is(':empty') && (!playerOneTurn)) {
        activePlayer = playerTwo
        playerOneTurn = true
    }
        $(element).text(activePlayer);
        
}

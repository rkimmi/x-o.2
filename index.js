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
        checkWin ()
}

function checkWin () {
    if ($('#blockOne').text().length > 0) {
        console.log('not empty!')
    }
    checkRows()
}

function checkRows () {
    // if ($('#blockOne').val() !== '' && 
    if ($('#blockOne').text().length > 0 &&
        $('#blockOne').text() === $('#blockTwo').text() && 
        $('#blockTwo').text() === $('#blockThree').text()) {
            console.log('first row win!')
        }

    if ($('#blockFour').text().length > 0 &&
        $('#blockFour').text() === $('#blockFive').text() && 
        $('#blockFive').text() === $('#blockSix').text()) {
            console.log('second row win!')
        }

        else (console.log(''))
}






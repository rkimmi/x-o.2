let playerOne = 'x'
let playerTwo = 'o'

let playerOneTurn = true

function makeMove (element) {
    if ($(element).is(':empty') && (playerOneTurn)) {
        activePlayer = playerOne
        playerOneTurn = false
    }
    else if ($(element).is(':empty') && (!playerOneTurn)) {
        activePlayer = playerTwo
        playerOneTurn = true
    }
    $(element).text(activePlayer);
    checkWin ()
}

function checkWin () {
    checkRows ()
    checkColumns ()
    checkDiagonal ()
}

function checkRows () {
    // if ($('#blockOne').val() !== '' && 
    if ($('#blockOne').text().length > 0 &&
        $('#blockOne').text() === $('#blockTwo').text() &&
        $('#blockTwo').text() === $('#blockThree').text()) {
        let winner = $('#blockOne').text()
        $('p').text(`Player ${winner} wins!`)
    }
    if ($('#blockFour').text().length > 0 &&
        $('#blockFour').text() === $('#blockFive').text() &&
        $('#blockFive').text() === $('#blockSix').text()) {
        let winner = $('#blockFour').text()
        $('p').text(`Player ${winner} wins!`)
    }
    if ($('#blockSeven').text().length > 0 &&
        $('#blockSeven').text() === $('#blockEight').text() &&
        $('#blockEight').text() === $('#blockNine').text()) {
        let winner = $('#blockSeven').text()
        $('p').text(`Player ${winner} wins!`)
    }
}

function checkColumns () {
    if ($('#blockOne').text().length > 0 &&
        $('#blockOne').text() === $('#blockFour').text() &&
        $('#blockFour').text() === $('#blockSeven').text()) {
        let winner = $('#blockOne').text()
        $('p').text(`Player ${winner} wins!`)
    }
    if ($('#blockTwo').text().length > 0 &&
        $('#blockTwo').text() === $('#blockFive').text() &&
        $('#blockFive').text() === $('#blockEight').text()) {
        let winner = $('#blockFour').text()
        $('p').text(`Player ${winner} wins!`)
    }
    if ($('#blockThree').text().length > 0 &&
        $('#blockThree').text() === $('#blockSix').text() &&
        $('#blockSix').text() === $('#blockNine').text()) {
        let winner = $('#blockThree').text()
        $('p').text(`Player ${winner} wins!`)
    }
}

function checkDiagonal () {
    if ($('#blockOne').text().length > 0 &&
        $('#blockOne').text() === $('#blockFive').text() &&
        $('#blockFive').text() === $('#blockNine').text()) {
        let winner = $('#blockOne').text()
        $('p').text(`Player ${winner} wins!`)
    }
    if ($('#blockThree').text().length > 0 &&
        $('#blockThree').text() === $('#blockFive').text() &&
        $('#blockFive').text() === $('#blockSeven').text()) {
        let winner = $('#blockThree').text()
        $('p').text(`Player ${winner} wins!`)
    }
}





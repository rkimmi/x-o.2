
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
    if ($('#one').text().length > 0 &&
        $('#one').text() === $('#two').text() &&
        $('#two').text() === $('#three').text()) {
        let winner = $('#one').text()
        $('p').text(`Player ${winner} wins!`)
    }
    if ($('#four').text().length > 0 &&
        $('#four').text() === $('#five').text() &&
        $('#five').text() === $('#six').text()) {
        let winner = $('#four').text()
        $('p').text(`Player ${winner} wins!`)
    }
    if ($('#seven').text().length > 0 &&
        $('#seven').text() === $('#eight').text() &&
        $('#eight').text() === $('#nine').text()) {
        let winner = $('#seven').text()
        $('p').text(`Player ${winner} wins!`)
    }
}

function checkColumns () {
    if ($('#one').text().length > 0 &&
        $('#one').text() === $('#four').text() &&
        $('#four').text() === $('#seven').text()) {
        let winner = $('#one').text()
        $('p').text(`Player ${winner} wins!`)
    }
    if ($('#two').text().length > 0 &&
        $('#two').text() === $('#five').text() &&
        $('#five').text() === $('#eight').text()) {
        let winner = $('#two').text()
        $('p').text(`Player ${winner} wins!`)
    }
    if ($('#three').text().length > 0 &&
        $('#three').text() === $('#six').text() &&
        $('#six').text() === $('#nine').text()) {
        let winner = $('#three').text()
        $('p').text(`Player ${winner} wins!`)
    }
}

function checkDiagonal () {
    if ($('#one').text().length > 0 &&
        $('#one').text() === $('#five').text() &&
        $('#five').text() === $('#nine').text()) {
        let winner = $('#one').text()
        $('p').text(`Player ${winner} wins!`)
    }
    if ($('#three').text().length > 0 &&
        $('#three').text() === $('#five').text() &&
        $('#five').text() === $('#seven').text()) {
        let winner = $('#three').text()
        $('p').text(`Player ${winner} wins!`)
    }
}








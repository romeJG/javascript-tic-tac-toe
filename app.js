const gameBoard = document.querySelector('#gameboard')
const info = document.querySelector('#info')

const startCells = [
    "", "", "", "", "", "", "", "", ""
]

function createBoard() {
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement, addEventListener('click', addGo)
        gameBoard.append(cellElement)
    })
}
createBoard()

function addGo(e) {
    console.log(e.target)
}
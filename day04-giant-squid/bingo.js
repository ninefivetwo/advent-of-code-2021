import Board from './board'

export const parseBingoBoard = (input) => {
    const data = [...input]
    const sequence = data
        .shift()
        .split(',')
        .map((n) => Number(n))
    const rawBoards = data.filter((line) => line !== '')
    const boards = []
    let currentBoard = []
    rawBoards.forEach((line) => {
        const rows = line
            .split(' ')
            .filter((n) => n !== '')
            .map((n) => Number(n))
        currentBoard.push(rows)
        if (currentBoard.length >= 5) {
            boards.push(currentBoard)
            currentBoard = []
        }
    })
    const bingo = { sequence, boards }
    return bingo
}

export const playBingo = (sequence, boards, cap) => {
    const states = boards.map((board) => new Board(board))

    let board
    let turn = 0
    let bingo = false
    while (
        turn < sequence.length &&
        (cap === undefined || turn < cap) &&
        bingo === false
    ) {
        const number = sequence[turn]

        states.forEach((state) => {
            const boardBingo = state.markBoard(number)
            if (boardBingo === true) {
                board = state
                bingo = true
                return
            }
        })
        turn += 1
    }
    return board
}

export const playLoserBingo = (sequence, boards, cap) => {
    const states = boards.map((board) => new Board(board))

    let board
    let turn = 0
    let winners = 0
    while (
        turn < sequence.length &&
        (cap === undefined || turn < cap) &&
        winners < boards.length
    ) {
        const number = sequence[turn]
        states.forEach((state) => {
            const boardBingo = state.markBoard(number)
            if (boardBingo === true && state.finished === false) {
                state.fnishBoard()
                board = state
                winners += 1
                return
            }
        })
        turn += 1
    }
    return board
}

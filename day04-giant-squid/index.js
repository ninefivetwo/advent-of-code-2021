import { getInput } from '../utils/input'

import { parseBingoBoard, playBingo, playLoserBingo } from './bingo'

const INPUT = getInput(import.meta.url, '\n')
const DATA = parseBingoBoard(INPUT)

const part1 = () => {
    const board = playBingo(DATA.sequence, DATA.boards)
    const sum = board.remainingSum
    const winner = board.winner
    const product = sum * winner
    console.log(`The final score of the winning board is: ${product}`)
}

const part2 = () => {
    const board = playLoserBingo(DATA.sequence, DATA.boards)
    const sum = board.remainingSum
    const winner = board.winner
    const product = sum * winner
    console.log(
        `The final score of the losing board when it bingos is: ${product}`
    )
}

part1()
part2()

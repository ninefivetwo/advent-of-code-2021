import { getInput } from '../utils/input'
import { parseVentLines, mapVents, mapP2Vents, countOverlap } from './vent'

const INPUT = getInput(import.meta.url, '\n')
const DATA = parseVentLines(INPUT)

const part1 = () => {
    const map = mapVents(DATA)
    const count = countOverlap(map, 2)
    console.log(
        `The number of points that overlap at least 2 times is: ${count}`
    )
}

const part2 = () => {
    const map = mapP2Vents(DATA)
    const count = countOverlap(map, 2)
    console.log(
        `The number of points that overlap at least 2 times (including diagonals) is: ${count}`
    )
}

part1()
part2()

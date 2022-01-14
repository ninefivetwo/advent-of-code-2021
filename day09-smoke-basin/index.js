import { getInput } from '../utils/input'
import {
    findLowPoints,
    calculateTotalRiskLevel,
    findBasins,
    findThreeLargestBasins,
} from './heightmap'

const INPUT = getInput(import.meta.url, '\n')
const HEIGHTS = INPUT.map((data) => data.split('').map((d) => Number(d)))

const part1 = () => {
    const { values } = findLowPoints(HEIGHTS)
    const riskLevel = calculateTotalRiskLevel(values)
    console.log(`The sum of the risk levels of all low points is: ${riskLevel}`)
}

const part2 = () => {
    const basins = findBasins(HEIGHTS)
    const threeLargestBasins = findThreeLargestBasins(basins)
    const result = threeLargestBasins.reduce((a, b) => a * b)
    console.log(`The three largest basins multiplied together is: ${result}`)
}

part1()
part2()

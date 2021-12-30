import { getInput } from '../utils/input'

import {
    parsePatternsAndOutput,
    countUniqueNumberedSegments,
    sumNumbers,
} from './digits'

const INPUT = getInput(import.meta.url, '\n')
const ENTRIES = INPUT.map((data) => parsePatternsAndOutput(data))

const part1 = () => {
    const count = countUniqueNumberedSegments(ENTRIES)
    console.log(`The number of times digits 1,4,7 or 8 appear is: ${count}`)
}

const part2 = () => {
    const sum = sumNumbers(ENTRIES)
    console.log(`The sum of all the output values is: ${sum}`)
}

part1()
part2()

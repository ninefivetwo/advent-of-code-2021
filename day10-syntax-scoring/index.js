import { getInput } from '../utils/input'
import {
    findCorruptedClosers,
    calculateSyntaxScore,
    calculateAutocompleteScores,
    findMiddleScore,
} from './syntax'

const INPUT = getInput(import.meta.url, '\n')

const part1 = () => {
    const corrupted = findCorruptedClosers(INPUT)
    const score = calculateSyntaxScore(corrupted)
    console.log(`The total syntax error score is: ${score}`)
}

const part2 = () => {
    const scores = calculateAutocompleteScores(INPUT)
    const middleScore = findMiddleScore(scores)
    console.log(`The middle score is: ${middleScore}`)
}

part1()
part2()

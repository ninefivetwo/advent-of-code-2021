import { getInput } from '../utils/input'
import {
    findGammaRate,
    findEpsilonRate,
    findO2GenRate,
    findCO2SrcubRate,
} from './diagnostic'

const INPUT = getInput(import.meta.url, '\n')
const DATA = INPUT.map((data) => String(data))

const part1 = () => {
    const gammaRate = findGammaRate(DATA)
    const epsilonRate = findEpsilonRate(DATA)
    const power = gammaRate * epsilonRate
    console.log(`The power consumption of the submarine is: ${power}`)
}

const part2 = () => {
    const o2GenRate = findO2GenRate(DATA)
    const co2ScrubRate = findCO2SrcubRate(DATA)
    const rating = o2GenRate * co2ScrubRate
    console.log(`The life support rating of the submarine is: ${rating}`)
}

part1()
part2()

import { getInput } from '../utils/input'
import { simulateOctopusFlashing, determineSyncedStep } from './flash'

const INPUT = getInput(import.meta.url, '\n')
const GRID = INPUT.map((data) => data.split('').map((d) => Number(d)))

const part1 = () => {
    const { count } = simulateOctopusFlashing(GRID, 100)
    console.log(`The total number of flahes after 100 steps is: ${count}`)
}

const part2 = () => {
    const steps = determineSyncedStep(GRID)
    console.log(`The first step during which all octopuses flash is: ${steps}`)
}

part1()
part2()

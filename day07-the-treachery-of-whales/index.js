import { getInput } from '../utils/input'

import { minFuelUsage, minAccumFuelUsage } from './fuel'

const INPUT = getInput(import.meta.url, '\n')
const POSITIONS = INPUT[0].split(',').map((data) => Number(data))

const part1 = () => {
    const fuelCost = minFuelUsage(POSITIONS)
    console.log(
        `The minimum amount of fuel needed to be spent to align all the crabs to the same horizontal position is: ${fuelCost}`
    )
}

const part2 = () => {
    const fuelCost = minAccumFuelUsage(POSITIONS)
    console.log(
        `The minimum amount of accumulative fuel needed to be spent to align all the crabs to the same horizontal position is: ${fuelCost}`
    )
}

part1()
part2()

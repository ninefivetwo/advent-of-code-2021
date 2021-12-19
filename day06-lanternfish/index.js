import { getInput } from '../utils/input'
import { simulateFishSpawn, calculateFishPopulation } from './fish'

const INPUT = getInput(import.meta.url, '\n')
const DATA = INPUT[0].split(',').map((data) => Number(data))

const part1 = () => {
    const fishList = simulateFishSpawn(DATA, 80)
    console.log(
        `The number of lanternfish after 80 days is: ${fishList.length}`
    )
}

const part2 = () => {
    const fishCount = calculateFishPopulation(DATA, 256)
    console.log(`The number of lanternfish after 256 days is: ${fishCount}`)
}

part1()
part2()

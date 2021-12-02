import { getInput } from '../utils/input'
import { countIncrease, countSumIncrease } from './measure'

const INPUT = getInput(import.meta.url, '\n')
const DEPTHS = INPUT.map((data) => Number(data))

const part1 = () => {
    const count = countIncrease(DEPTHS)
    console.log(
        `The number of measurements that are larger than the previous measurement is: ${count}`
    )
}

const part2 = () => {
    const count = countSumIncrease(DEPTHS, 3)
    console.log(
        `The number of sums that are larger than the previous sum is: ${count}`
    )
}

part1()
part2()

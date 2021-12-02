import { getInput } from '../utils/input'

import { parseSubCommands, followCourse, followAimedCourse } from './dive'

const INPUT = getInput(import.meta.url, '\n')
const COMMANDS = parseSubCommands(INPUT)

const part1 = () => {
    const { horizontal, depth } = followCourse(COMMANDS)
    const result = horizontal * depth
    console.log(
        `Multiplying the final horizontal position by the final depth equals to: ${result}`
    )
}

const part2 = () => {
    const { horizontal, depth } = followAimedCourse(COMMANDS)
    const result = horizontal * depth
    console.log(
        `Multiplying the final horizontal position by the final depth with aiming equals to: ${result}`
    )
}

part1()
part2()

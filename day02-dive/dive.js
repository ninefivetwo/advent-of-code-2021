import { commandTypes } from './constants'

export const parseSubCommands = (data) => {
    const commands = data.map((line) => {
        const [type, value] = line.split(' ')
        return { type, value: Number(value) }
    })
    return commands
}

export const followCourse = (commands) => {
    let horizontal = 0
    let depth = 0
    commands.forEach((command) => {
        if (command.type === commandTypes.forward) {
            horizontal += command.value
        } else if (command.type === commandTypes.down) {
            depth += command.value
        } else if (command.type === commandTypes.up) {
            depth -= command.value
        }
    })
    return { horizontal, depth }
}

export const followAimedCourse = (commands) => {
    let horizontal = 0
    let depth = 0
    let aim = 0
    commands.forEach((command) => {
        if (command.type === commandTypes.forward) {
            horizontal += command.value
            depth += command.value * aim
        } else if (command.type === commandTypes.down) {
            aim += command.value
        } else if (command.type === commandTypes.up) {
            aim -= command.value
        }
    })
    return { horizontal, depth }
}

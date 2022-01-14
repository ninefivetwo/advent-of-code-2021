import {
    corruptedPoints,
    bracketPairs,
    autocompletePoints,
    autocompleteMultiplier,
} from './constants'

const checkCorruptedLine = (line) => {
    const openers = Object.keys(bracketPairs)
    const chars = line.split('')
    const bracketCollection = []

    let corruptedChar
    chars.forEach((char) => {
        const charCode = char.charCodeAt()
        if (openers.includes(String(charCode)) === true) {
            bracketCollection.push(charCode)
        } else {
            const lastCharCode = bracketCollection.pop()
            const expectedCharCode = bracketPairs[lastCharCode]
            if (corruptedChar === undefined && charCode !== expectedCharCode) {
                corruptedChar = charCode
            }
        }
    })
    return corruptedChar
}

export const findCorruptedClosers = (code) => {
    const corruptedTally = {}
    code.forEach((line) => {
        const corruptedChar = checkCorruptedLine(line)
        if (corruptedChar !== undefined) {
            if (corruptedTally[corruptedChar] === undefined) {
                corruptedTally[corruptedChar] = 1
            } else {
                corruptedTally[corruptedChar] += 1
            }
        }
    })
    return corruptedTally
}

export const calculateSyntaxScore = (tally) => {
    const keys = Object.keys(tally)
    let sum = 0
    keys.forEach((key) => {
        sum += corruptedPoints[key] * tally[key]
    })
    return sum
}

const autocompleteLine = (line) => {
    const openers = Object.keys(bracketPairs)
    const chars = line.split('')
    const bracketCollection = []
    chars.forEach((char) => {
        const charCode = char.charCodeAt()
        if (openers.includes(String(charCode)) === true) {
            bracketCollection.push(charCode)
        } else {
            bracketCollection.pop()
        }
    })

    let closers = []
    bracketCollection.reverse().forEach((opener) => {
        const closer = bracketPairs[opener]
        closers.push(closer)
    })
    return closers
}

export const calculateAutocompleteScores = (code) => {
    const cleanCode = code.filter(
        (line) => checkCorruptedLine(line) === undefined
    )

    const scores = []
    cleanCode.forEach((line) => {
        const autocomplete = autocompleteLine(line)
        let score = 0
        autocomplete.forEach((charCode) => {
            score *= autocompleteMultiplier
            score += autocompletePoints[charCode]
        })
        scores.push(score)
    })
    return scores
}

export const findMiddleScore = (scores) => {
    const sortedScores = scores.sort((a, b) => a - b)
    const middle = sortedScores[Math.round((sortedScores.length - 1) / 2)]
    return middle
}

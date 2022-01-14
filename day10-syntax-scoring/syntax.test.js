import { expect } from 'chai'
import {
    findCorruptedClosers,
    calculateSyntaxScore,
    calculateAutocompleteScores,
    findMiddleScore,
} from './syntax'

describe('Day10 - Syntax Scoring', function () {
    const sampleData1 = [
        '[({(<(())[]>[[{[]{<()<>>',
        '[(()[<>])]({[<{<<[]>>(',
        '{([(<{}[<>[]}>{[]{[(<()>',
        '(((({<>}<{<{<>}{[]{[]{}',
        '[[<[([]))<([[{}[[()]]]',
        '[{[{({}]{}}([{[{{{}}([]',
        '{<[[]]>}<{[{[{[]{()[[[]',
        '[<(<(<(<{}))><([]([]()',
        '<{([([[(<>()){}]>(<<{{',
        '<{([{{}}[<[[[<>{}]]]>[]]',
    ]

    describe('findCorruptedClosers', function () {
        it('Sample data 1', function () {
            const corrupted = findCorruptedClosers(sampleData1)
            expect(corrupted).to.deep.equal({ 41: 2, 93: 1, 125: 1, 62: 1 })
        })
    })

    describe('calculateSyntaxScore', function () {
        it('Sample data 1', function () {
            const corrupted = findCorruptedClosers(sampleData1)
            const score = calculateSyntaxScore(corrupted)
            expect(score).to.equal(26397)
        })
    })

    describe('calculateAutocompleteScores', function () {
        it('Sample data 1', function () {
            const scores = calculateAutocompleteScores(sampleData1)
            expect(scores).to.have.ordered.members([
                288957, 5566, 1480781, 995444, 294,
            ])
        })
    })

    describe('findMiddleScore', function () {
        it('Sample data 1', function () {
            const scores = calculateAutocompleteScores(sampleData1)
            const middleScore = findMiddleScore(scores)
            expect(middleScore).to.equal(288957)
        })
    })
})

import { expect } from 'chai'
import { mapVents, countOverlap, mapP2Vents } from './vent'

describe('Day05 - Hydrothermal Venture', function () {
    const sampleData1 = [
        { start: [0, 9], finish: [5, 9] },
        { start: [8, 0], finish: [0, 8] },
        { start: [9, 4], finish: [3, 4] },
        { start: [2, 2], finish: [2, 1] },
        { start: [7, 0], finish: [7, 4] },
        { start: [6, 4], finish: [2, 0] },
        { start: [0, 9], finish: [2, 9] },
        { start: [3, 4], finish: [1, 4] },
        { start: [0, 0], finish: [8, 8] },
        { start: [5, 5], finish: [8, 2] },
    ]
    const sampleData1Result = [
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 1, 1, 2, 1, 1, 1, 2, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 1, 1, 1, 0, 0, 0, 0],
    ]
    const sampleData1P2Result = [
        [1, 0, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 2, 0, 0],
        [0, 0, 2, 0, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 2, 0, 2, 0, 0],
        [0, 1, 1, 2, 3, 1, 3, 2, 1, 1],
        [0, 0, 0, 1, 0, 2, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [2, 2, 2, 1, 1, 1, 0, 0, 0, 0],
    ]

    describe('mapVents', function () {
        it('Sample data 1', function () {
            const map = mapVents(sampleData1)
            map.forEach((row, idx) => {
                expect(row).to.have.ordered.members(sampleData1Result[idx])
            })
        })
    })

    describe('mapP2Vents', function () {
        it('Sample data 1', function () {
            const map = mapP2Vents(sampleData1)
            map.forEach((row, idx) => {
                expect(row).to.have.ordered.members(sampleData1P2Result[idx])
            })
        })
    })

    describe('countOverlap', function () {
        it('Sample data 1', function () {
            const count = countOverlap(sampleData1Result, 2)
            expect(count).to.equal(5)
        })

        it('Sample data part2', function () {
            const count = countOverlap(sampleData1P2Result, 2)
            expect(count).to.equal(12)
        })
    })
})

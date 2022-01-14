import { expect } from 'chai'
import {
    findLowPoints,
    calculateTotalRiskLevel,
    findBasins,
    findThreeLargestBasins,
} from './heightmap'

describe('Day09 - Smoke Basin', function () {
    const sampleData1 = [
        [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
        [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
        [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
        [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
        [9, 8, 9, 9, 9, 6, 5, 6, 7, 8],
    ]

    describe('findLowPoints', function () {
        it('Sample data 1', function () {
            const { values } = findLowPoints(sampleData1)
            expect(values).to.have.members([1, 0, 5, 5])
        })
    })

    describe('calculateTotalRiskLevel', function () {
        it('Sample data 1', function () {
            const { values } = findLowPoints(sampleData1)
            const riskLevel = calculateTotalRiskLevel(values)
            expect(riskLevel).to.equal(15)
        })
    })

    describe('findBasins', function () {
        it('Sample data 1', function () {
            const basins = findBasins(sampleData1)
            expect(basins).to.have.members([3, 9, 14, 9])
        })
    })

    describe('findThreeLargestBasins', function () {
        it('Sample data 1', function () {
            const basins = findBasins(sampleData1)
            const topThree = findThreeLargestBasins(basins)
            expect(topThree).to.have.ordered.members([14, 9, 9])
        })
    })
})

import { expect } from 'chai'
import { simulateOctopusFlashing, determineSyncedStep } from './flash'

describe('Day11 - Dumbo Octopus', function () {
    const sampleData1 = [
        [5, 4, 8, 3, 1, 4, 3, 2, 2, 3],
        [2, 7, 4, 5, 8, 5, 4, 7, 1, 1],
        [5, 2, 6, 4, 5, 5, 6, 1, 7, 3],
        [6, 1, 4, 1, 3, 3, 6, 1, 4, 6],
        [6, 3, 5, 7, 3, 8, 5, 4, 7, 8],
        [4, 1, 6, 7, 5, 2, 4, 6, 4, 5],
        [2, 1, 7, 6, 8, 4, 1, 7, 2, 1],
        [6, 8, 8, 2, 8, 8, 1, 1, 3, 4],
        [4, 8, 4, 6, 8, 4, 8, 5, 5, 4],
        [5, 2, 8, 3, 7, 5, 1, 5, 2, 6],
    ]

    describe('simulateOctopusFlashing', function () {
        it('Sample data 1 - 2 steps', function () {
            const { count } = simulateOctopusFlashing(sampleData1, 2)
            expect(count).to.equal(35)
        })

        it('Sample data 1 - 3 steps', function () {
            const { count } = simulateOctopusFlashing(sampleData1, 3)
            expect(count).to.equal(80)
        })

        it('Sample data 1 - 10 steps', function () {
            const { count } = simulateOctopusFlashing(sampleData1, 10)
            expect(count).to.equal(204)
        })

        it('Sample data 1 - 100 steps', function () {
            const { count } = simulateOctopusFlashing(sampleData1, 100)
            expect(count).to.equal(1656)
        })
    })

    describe('determineSyncedStep', function () {
        it('Sample data 1', function () {
            const steps = determineSyncedStep(sampleData1)
            expect(steps).to.equal(195)
        })
    })
})

import { expect } from 'chai'
import { simulateFishSpawn, calculateFishPopulation } from './fish'

describe('Day06 - Lanternfish', function () {
    const sampleData1 = [3, 4, 3, 1, 2]

    describe('simulateFishSpawn', function () {
        it('Sample data 1 - after day 18', function () {
            const fishList = simulateFishSpawn(sampleData1, 18)
            expect(fishList).to.have.length(26)
        })

        it('Sample data 1 - after day 80', function () {
            const fishList = simulateFishSpawn(sampleData1, 80)
            expect(fishList).to.have.length(5934)
        })
    })

    describe('calculateFishPopulation', function () {
        it('Sample data 1 - after day 18', function () {
            const count = calculateFishPopulation(sampleData1, 18)
            expect(count).to.equal(26)
        })

        it('Sample data 1 - after day 80', function () {
            const count = calculateFishPopulation(sampleData1, 80)
            expect(count).to.equal(5934)
        })

        it('Sample data 1 - after day 256', function () {
            const count = calculateFishPopulation(sampleData1, 256)
            expect(count).to.equal(26984457539)
        })
    })
})

import { expect } from 'chai'

import { minFuelUsage, minAccumFuelUsage } from './fuel'

describe.only('Day07 - The Treachery of Whales', function () {
    const sampleData1 = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14]

    describe('minFuelUsage', function () {
        it('Sample Data 1', function () {
            const result = minFuelUsage(sampleData1)
            expect(result).to.equal(37)
        })
    })

    describe('minAccumFuelUsage', function () {
        it('Sample Data 1', function () {
            const result = minAccumFuelUsage(sampleData1)
            expect(result).to.equal(168)
        })
    })
})

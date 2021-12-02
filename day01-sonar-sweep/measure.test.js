import { expect } from 'chai'

import { countIncrease, calculateSumWindows, countSumIncrease } from './measure'

describe('Day01 - Sonar Sweep', function () {
    let sampleData1 = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]

    describe('countIncrease', function () {
        it('Sample data 1', function () {
            const count = countIncrease(sampleData1)
            expect(count).to.equal(7)
        })
    })

    describe('calculateSumWindows', function () {
        let sumData1 = [607, 618, 618, 617, 647, 716, 769, 792]

        it('Sample data 1', function () {
            const sums = calculateSumWindows(sampleData1, 3)
            expect(sums).to.have.ordered.members(sumData1)
        })
    })

    describe('countSumIncrease', function () {
        it('Sample data 1', function () {
            const count = countSumIncrease(sampleData1, 3)
            expect(count).to.equal(5)
        })
    })
})

import { expect } from 'chai'
import {
    findGammaRate,
    findEpsilonRate,
    findO2GenRate,
    findCO2SrcubRate,
} from './diagnostic'

describe('Day03 - Binary Diagnostic', function () {
    let sampleData1 = [
        '00100',
        '11110',
        '10110',
        '10111',
        '10101',
        '01111',
        '00111',
        '11100',
        '10000',
        '11001',
        '00010',
        '01010',
    ]

    describe('findGammaRate', function () {
        it('Sample data 1', function () {
            const rate = findGammaRate(sampleData1)
            expect(rate).to.equal(22)
        })
    })

    describe('findEpsilonRate', function () {
        it('Sample data 1', function () {
            const rate = findEpsilonRate(sampleData1)
            expect(rate).to.equal(9)
        })
    })

    describe('findO2GenRate', function () {
        it('Sample data 1', function () {
            const rate = findO2GenRate(sampleData1)
            expect(rate).to.equal(23)
        })
    })

    describe('findCO2SrcubRate', function () {
        it('Sample data 1', function () {
            const rate = findCO2SrcubRate(sampleData1)
            expect(rate).to.equal(10)
        })
    })
})

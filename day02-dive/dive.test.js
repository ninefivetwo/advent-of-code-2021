import { expect } from 'chai'

import { followCourse, followAimedCourse } from './dive'

describe('Day02 - Dive', function () {
    const sampleData1 = [
        { type: 'forward', value: 5 },
        { type: 'down', value: 5 },
        { type: 'forward', value: 8 },
        { type: 'up', value: 3 },
        { type: 'down', value: 8 },
        { type: 'forward', value: 2 },
    ]

    describe('followCourse', function () {
        it('Sample data 1', function () {
            const { horizontal, depth } = followCourse(sampleData1)
            expect(horizontal, 'horizontal').to.equal(15)
            expect(depth, 'depth').to.equal(10)
        })
    })

    describe('followAimedCourse', function () {
        it('Sample data 1', function () {
            const { horizontal, depth } = followAimedCourse(sampleData1)
            expect(horizontal, 'horizontal').to.equal(15)
            expect(depth, 'depth').to.equal(60)
        })
    })
})

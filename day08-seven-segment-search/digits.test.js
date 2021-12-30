import { expect } from 'chai'

import {
    countUniqueNumberedSegments,
    generateLegend,
    generateNumber,
    sumNumbers,
} from './digits'

describe('Day08 - Seven Segment Search', function () {
    const sampleData1 = [
        {
            patterns: [
                'be',
                'cfbegad',
                'cbdgef',
                'fgaecd',
                'cgeb',
                'fdcge',
                'agebfd',
                'fecdb',
                'fabcd',
                'edb',
            ],
            digits: ['fdgacbe', 'cefdb', 'cefbgd', 'gcbe'],
        },
        {
            patterns: [
                'edbfga',
                'begcd',
                'cbg',
                'gc',
                'gcadebf',
                'fbgde',
                'acbgfd',
                'abcde',
                'gfcbed',
                'gfec',
            ],
            digits: ['fcgedb', 'cgb', 'dgebacf', 'gc'],
        },
        {
            patterns: [
                'fgaebd',
                'cg',
                'bdaec',
                'gdafb',
                'agbcfd',
                'gdcbef',
                'bgcad',
                'gfac',
                'gcb',
                'cdgabef',
            ],
            digits: ['cg', 'cg', 'fdcagb', 'cbg'],
        },
        {
            patterns: [
                'fbegcd',
                'cbd',
                'adcefb',
                'dageb',
                'afcb',
                'bc',
                'aefdc',
                'ecdab',
                'fgdeca',
                'fcdbega',
            ],
            digits: ['efabcd', 'cedba', 'gadfec', 'cb'],
        },
        {
            patterns: [
                'aecbfdg',
                'fbg',
                'gf',
                'bafeg',
                'dbefa',
                'fcge',
                'gcbea',
                'fcaegb',
                'dgceab',
                'fcbdga',
            ],
            digits: ['gecf', 'egdcabf', 'bgf', 'bfgea'],
        },
        {
            patterns: [
                'fgeab',
                'ca',
                'afcebg',
                'bdacfeg',
                'cfaedg',
                'gcfdb',
                'baec',
                'bfadeg',
                'bafgc',
                'acf',
            ],
            digits: ['gebdcfa', 'ecba', 'ca', 'fadegcb'],
        },
        {
            patterns: [
                'dbcfg',
                'fgd',
                'bdegcaf',
                'fgec',
                'aegbdf',
                'ecdfab',
                'fbedc',
                'dacgb',
                'gdcebf',
                'gf',
            ],
            digits: ['cefg', 'dcbef', 'fcge', 'gbcadfe'],
        },
        {
            patterns: [
                'bdfegc',
                'cbegaf',
                'gecbf',
                'dfcage',
                'bdacg',
                'ed',
                'bedf',
                'ced',
                'adcbefg',
                'gebcd',
            ],
            digits: ['ed', 'bcgafe', 'cdgba', 'cbgef'],
        },
        {
            patterns: [
                'egadfb',
                'cdbfeg',
                'cegd',
                'fecab',
                'cgb',
                'gbdefca',
                'cg',
                'fgcdab',
                'egfdb',
                'bfceg',
            ],
            digits: ['gbdfcae', 'bgc', 'cg', 'cgb'],
        },
        {
            patterns: [
                'gcafb',
                'gcf',
                'dcaebfg',
                'ecagb',
                'gf',
                'abcdeg',
                'gaef',
                'cafbge',
                'fdbac',
                'fegbdc',
            ],
            digits: ['fgae', 'cfgab', 'fg', 'bagce'],
        },
    ]
    let sampleEntry = {
        patterns: [
            'acedgfb',
            'cdfbe',
            'gcdfa',
            'fbcad',
            'dab',
            'cefabd',
            'cdfgeb',
            'eafb',
            'cagedb',
            'ab',
        ],
        digits: ['cdfeb', 'fcadb', 'cdfeb', 'cdbaf'],
    }
    let sampleLegend = {
        top: 'd',
        topLeft: 'e',
        topRight: 'a',
        middle: 'f',
        bottomLeft: 'g',
        bottomRight: 'b',
        bottom: 'c',
    }

    describe('countUniqueNumberedSegments', function () {
        it('Sample data 1', function () {
            const count = countUniqueNumberedSegments(sampleData1)
            expect(count).to.equal(26)
        })
    })

    describe('generateLegend', function () {
        it('Sample pattern 1', function () {
            const legend = generateLegend(sampleEntry)
            expect(legend.top, 'top').to.equal(sampleLegend.top)
            expect(legend.topLeft, 'topLeft').to.equal(sampleLegend.topLeft)
            expect(legend.topRight, 'topRight').to.equal(sampleLegend.topRight)
            expect(legend.middle, 'middle').to.equal(sampleLegend.middle)
            expect(legend.bottomLeft, 'bottomLeft').to.equal(
                sampleLegend.bottomLeft
            )
            expect(legend.bottomRight, 'bottomRight').to.equal(
                sampleLegend.bottomRight
            )
            expect(legend.bottom, 'bottom').to.equal(sampleLegend.bottom)
        })
    })

    describe('generateNumber', function () {
        it('Sample pattern 1 - cdfeb', function () {
            const number = generateNumber(sampleEntry.digits, sampleLegend)
            expect(number).to.equal(5353)
        })
    })

    describe('sumNumbers', function () {
        it('Sample pattern 1 - cdfeb', function () {
            const sum = sumNumbers(sampleData1)
            expect(sum).to.equal(61229)
        })
    })
})

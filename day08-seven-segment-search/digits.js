export const parsePatternsAndOutput = (entry) => {
    const [pattern, output] = entry.split(' | ')
    const patterns = pattern.split(' ')
    const digits = output.split(' ')
    return { patterns, digits }
}

export const countUniqueNumberedSegments = (entries) => {
    let count = 0
    entries.forEach((entry) => {
        const { digits } = entry
        digits.forEach((digit) => {
            const digitLength = digit.length
            if (
                digitLength === 2 ||
                digitLength === 4 ||
                digitLength === 3 ||
                digitLength === 7
            ) {
                count += 1
            }
        })
    })
    return count
}

const isZero = (digit, legend) => {
    let segments = digit.slice()
    segments = segments.replace(legend.top, '')
    segments = segments.replace(legend.topLeft, '')
    segments = segments.replace(legend.topRight, '')
    segments = segments.replace(legend.bottomLeft, '')
    segments = segments.replace(legend.bottomRight, '')
    segments = segments.replace(legend.bottom, '')
    return digit.length === 6 && segments.length === 0
}

const isOne = (digit, legend) => {
    let segments = digit.slice()
    segments = segments.replace(legend.topRight, '')
    segments = segments.replace(legend.bottomRight, '')
    return digit.length === 2 && segments.length === 0
}

const isTwo = (digit, legend) => {
    let segments = digit.slice()
    segments = segments.replace(legend.top, '')
    segments = segments.replace(legend.topRight, '')
    segments = segments.replace(legend.middle, '')
    segments = segments.replace(legend.bottomLeft, '')
    segments = segments.replace(legend.bottom, '')
    return digit.length === 5 && segments.length === 0
}

const isThree = (digit, legend) => {
    let segments = digit.slice()
    segments = segments.replace(legend.top, '')
    segments = segments.replace(legend.topRight, '')
    segments = segments.replace(legend.middle, '')
    segments = segments.replace(legend.bottomRight, '')
    segments = segments.replace(legend.bottom, '')
    return digit.length === 5 && segments.length === 0
}

const isFour = (digit, legend) => {
    let segments = digit.slice()
    segments = segments.replace(legend.topLeft, '')
    segments = segments.replace(legend.topRight, '')
    segments = segments.replace(legend.middle, '')
    segments = segments.replace(legend.bottomRight, '')
    return digit.length === 4 && segments.length === 0
}

const isFive = (digit, legend) => {
    let segments = digit.slice()
    segments = segments.replace(legend.top, '')
    segments = segments.replace(legend.topLeft, '')
    segments = segments.replace(legend.middle, '')
    segments = segments.replace(legend.bottomRight, '')
    segments = segments.replace(legend.bottom, '')
    return digit.length === 5 && segments.length === 0
}

const isSix = (digit, legend) => {
    let segments = digit.slice()
    segments = segments.replace(legend.top, '')
    segments = segments.replace(legend.topLeft, '')
    segments = segments.replace(legend.middle, '')
    segments = segments.replace(legend.bottomLeft, '')
    segments = segments.replace(legend.bottomRight, '')
    segments = segments.replace(legend.bottom, '')
    return digit.length === 6 && segments.length === 0
}

const isSeven = (digit, legend) => {
    let segments = digit.slice()
    segments = segments.replace(legend.top, '')
    segments = segments.replace(legend.topRight, '')
    segments = segments.replace(legend.bottomRight, '')
    return digit.length === 3 && segments.length === 0
}

const isEight = (digit, legend) => {
    let segments = digit.slice()
    segments = segments.replace(legend.top, '')
    segments = segments.replace(legend.topLeft, '')
    segments = segments.replace(legend.topRight, '')
    segments = segments.replace(legend.middle, '')
    segments = segments.replace(legend.bottomLeft, '')
    segments = segments.replace(legend.bottomRight, '')
    segments = segments.replace(legend.bottom, '')
    return digit.length === 7 && segments.length === 0
}

const isNine = (digit, legend) => {
    let segments = digit.slice()
    segments = segments.replace(legend.top, '')
    segments = segments.replace(legend.topLeft, '')
    segments = segments.replace(legend.topRight, '')
    segments = segments.replace(legend.middle, '')
    segments = segments.replace(legend.bottomRight, '')
    segments = segments.replace(legend.bottom, '')
    return digit.length === 6 && segments.length === 0
}

const segmentDifference = (seg1, seg2) => {
    let difference = seg1.slice()
    seg2.split('').forEach((seg) => {
        difference = difference.replace(seg, '')
    })
    return difference
}

const segmentUnion = (seg1, seg2) => {
    let union = seg1.slice()
    seg2.split('').forEach((seg) => {
        if (!union.includes(seg)) {
            union += seg
        }
    })
    return union
}

export const generateLegend = (entry) => {
    const { patterns } = entry
    const number = {}
    const legend = {}

    // Digits with unique number of segments
    number.one = patterns.find((digit) => digit.length === 2)
    number.four = patterns.find((digit) => digit.length === 4)
    number.seven = patterns.find((digit) => digit.length === 3)
    number.eight = patterns.find((digit) => digit.length === 7)

    // Algorithm to determine all the segments
    // 1 - top
    legend.top = segmentDifference(number.seven, number.one)
    // 2 - digit six
    number.six = patterns.find(
        (digit) =>
            digit.length === 6 && segmentUnion(digit, number.one).length === 7
    )
    // 3 - top right
    legend.topRight = segmentDifference(number.eight, number.six)
    // 4 - bottom right
    legend.bottomRight = segmentDifference(number.one, legend.topRight)
    // bonus shape - bottom left + bottom
    const bottomLeftBottom = segmentDifference(
        segmentDifference(number.eight, number.four),
        legend.top
    )
    // 5 - digit zero
    number.zero = patterns.find(
        (digit) =>
            digit.length === 6 &&
            digit.includes(legend.topRight) &&
            digit.includes(bottomLeftBottom[0]) &&
            digit.includes(bottomLeftBottom[1])
    )
    // 6 - digit two
    number.two = patterns.find(
        (digit) =>
            digit.length === 5 &&
            digit.includes(bottomLeftBottom[0]) &&
            digit.includes(bottomLeftBottom[1])
    )
    // 7 - top left
    legend.topLeft = segmentDifference(
        segmentDifference(number.zero, number.two),
        legend.bottomRight
    )
    // 8 - digit five
    number.five = patterns.find(
        (digit) => digit.length === 5 && digit.includes(legend.topLeft)
    )
    // 9 - bottom right
    legend.bottomLeft = segmentDifference(
        segmentDifference(number.eight, number.five),
        legend.topRight
    )
    // 10 - digit 3
    number.three = segmentDifference(
        segmentDifference(number.eight, legend.topLeft),
        legend.bottomLeft
    )
    // 11 - middle
    legend.middle = segmentDifference(
        segmentDifference(
            segmentDifference(number.four, legend.topLeft),
            legend.topRight
        ),
        legend.bottomRight
    )
    // 12 - bottom
    legend.bottom = segmentDifference(
        segmentDifference(
            segmentDifference(
                segmentDifference(
                    segmentDifference(number.zero, legend.top),
                    legend.topLeft
                ),
                legend.topRight
            ),
            legend.bottomLeft
        ),
        legend.bottomRight
    )
    // 13 - digit nine
    number.nine = segmentDifference(number.eight, legend.bottomLeft)

    return legend
}

export const generateNumber = (digits, legend) => {
    let numbers = ''
    digits.forEach((digit) => {
        if (isZero(digit, legend) === true) {
            numbers += 0
        } else if (isOne(digit, legend) === true) {
            numbers += 1
        } else if (isTwo(digit, legend) === true) {
            numbers += 2
        } else if (isThree(digit, legend) === true) {
            numbers += 3
        } else if (isFour(digit, legend) === true) {
            numbers += 4
        } else if (isFive(digit, legend) === true) {
            numbers += 5
        } else if (isSix(digit, legend) === true) {
            numbers += 6
        } else if (isSeven(digit, legend) === true) {
            numbers += 7
        } else if (isEight(digit, legend) === true) {
            numbers += 8
        } else if (isNine(digit, legend) === true) {
            numbers += 9
        }
    })
    return Number(numbers)
}

export const sumNumbers = (entries) => {
    const numbers = []
    entries.forEach((entry) => {
        const legend = generateLegend(entry)
        const number = generateNumber(entry.digits, legend)
        numbers.push(number)
    })

    const sum = numbers.reduce((a, b) => a + b)
    return sum
}

import { BitType, BitValue } from './constants'

const createTally = (size) => {
    const tally = []
    for (let i = 0; i < size; i += 1) {
        tally[i] = { [BitType.zero]: 0, [BitType.one]: 0 }
    }
    return tally
}

const tallyBits = (tally, binary) => {
    const updatedTally = [...tally]
    binary.forEach((bit, idx) => {
        if (bit === BitValue.zero) {
            updatedTally[idx][BitType.zero] += 1
        } else if (bit === BitValue.one) {
            updatedTally[idx][BitType.one] += 1
        }
    })
    return updatedTally
}

const findMostCommonBit = (tally) => {
    if (tally[BitType.one] >= tally[BitType.zero]) {
        return BitValue.one
    }
    return BitValue.zero
}

const findLeastCommonBit = (tally) => {
    if (tally[BitType.zero] <= tally[BitType.one]) {
        return BitValue.zero
    }
    return BitValue.one
}

const binaryToNumber = (binary) => {
    const num = parseInt(binary, 2)
    return num
}

export const findGammaRate = (data) => {
    let tally = createTally(data[0].length)
    data.forEach((binary) => {
        tally = tallyBits(tally, [...binary])
    })
    const finalBinary = tally
        .map((res) => {
            return findMostCommonBit(res)
        })
        .join('')
    return binaryToNumber(finalBinary)
}

export const findEpsilonRate = (data) => {
    let tally = createTally(data[0].length)
    data.forEach((binary) => {
        tally = tallyBits(tally, [...binary])
    })
    const finalBinary = tally
        .map((res) => {
            return findLeastCommonBit(res)
        })
        .join('')
    return binaryToNumber(finalBinary)
}

const bitIterate = (binaries, matcher, index) => {
    if (binaries.length === 1) {
        return binaries[0]
    }
    if (binaries.length === 0 || index >= binaries[0].length) {
        return undefined
    }

    let bins = [...binaries]
    let tally = createTally(bins[0].length)
    bins.forEach((binary) => {
        tally = tallyBits(tally, [...binary])
    })
    const bit = matcher(tally[index])
    bins = bins.filter((bin) => bin[index] === bit)

    return bitIterate(bins, matcher, index + 1)
}

export const findO2GenRate = (data) => {
    const finalBinary = bitIterate(data, findMostCommonBit, 0)
    return binaryToNumber(finalBinary)
}

export const findCO2SrcubRate = (data) => {
    const finalBinary = bitIterate(data, findLeastCommonBit, 0)
    return binaryToNumber(finalBinary)
}

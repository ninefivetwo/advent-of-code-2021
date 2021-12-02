export const countIncrease = (depths) => {
    let count = 0
    for (let i = 1; i < depths.length; i += 1) {
        const previousDepth = depths[i - 1]
        const currentDepth = depths[i]
        const diff = currentDepth - previousDepth
        if (diff > 0) {
            count += 1
        }
    }
    return count
}

export const calculateSumWindows = (depths, sampleSize) => {
    const sums = []
    const sampler = [...Array(sampleSize).keys()]
    for (let i = sampleSize - 1; i < depths.length; i += 1) {
        const depthSamples = sampler.map((s) => depths[i - s])
        const sum = depthSamples.reduce((a, b) => a + b)
        sums.push(sum)
    }
    return sums
}

export const countSumIncrease = (depths, sampleSize) => {
    const sums = calculateSumWindows(depths, sampleSize)
    const count = countIncrease(sums)
    return count
}

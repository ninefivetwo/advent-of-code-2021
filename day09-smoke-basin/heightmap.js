const checkLowestPoint = (heightmap, rowPosition, columnPosition) => {
    const row = heightmap[rowPosition]
    const height = row[columnPosition]
    const rowAbove = heightmap[rowPosition - 1]
    const rowBelow = heightmap[rowPosition + 1]
    let above, below
    if (rowAbove !== undefined) {
        above = rowAbove[columnPosition]
    }
    if (rowBelow !== undefined) {
        below = rowBelow[columnPosition]
    }
    let left = row[columnPosition - 1]
    let right = row[columnPosition + 1]

    let lowest = true
    if (above !== undefined && above <= height) {
        lowest = false
    } else if (below !== undefined && below < height) {
        lowest = false
    } else if (left !== undefined && left < height) {
        lowest = false
    } else if (right !== undefined && right < height) {
        lowest = false
    }
    return lowest
}

export const findLowPoints = (heightmap) => {
    const lowPoints = []
    const lowValues = []
    for (
        let rowPosition = 0;
        rowPosition < heightmap.length;
        rowPosition += 1
    ) {
        let row = heightmap[rowPosition]
        for (
            let columnPosition = 0;
            columnPosition < row.length;
            columnPosition += 1
        ) {
            const lowest = checkLowestPoint(
                heightmap,
                rowPosition,
                columnPosition
            )
            if (lowest === true) {
                lowPoints.push([rowPosition, columnPosition])
                lowValues.push(row[columnPosition])
            }
        }
    }
    return {
        points: lowPoints,
        values: lowValues,
    }
}

export const calculateTotalRiskLevel = (values) => {
    let sum = 0
    for (let i = 0; i < values.length; i += 1) {
        sum += values[i] + 1
    }
    return sum
}

const calculateBasin = (
    heightmap,
    rowPosition,
    columnPosition,
    initialMap = {}
) => {
    const row = heightmap[rowPosition]
    const height = row[columnPosition]
    const rowAbove = heightmap[rowPosition - 1]
    const rowBelow = heightmap[rowPosition + 1]
    let above, below
    if (rowAbove !== undefined) {
        above = rowAbove[columnPosition]
    }
    if (rowBelow !== undefined) {
        below = rowBelow[columnPosition]
    }
    let left = row[columnPosition - 1]
    let right = row[columnPosition + 1]

    let map = { ...initialMap }
    map[`${rowPosition},${columnPosition}`] = 1
    if (above !== undefined && above > height && above !== 9) {
        map = calculateBasin(heightmap, rowPosition - 1, columnPosition, map)
    }
    if (below !== undefined && below > height && below !== 9) {
        map = calculateBasin(heightmap, rowPosition + 1, columnPosition, map)
    }
    if (left !== undefined && left > height && left !== 9) {
        map = calculateBasin(heightmap, rowPosition, columnPosition - 1, map)
    }
    if (right !== undefined && right > height && right !== 9) {
        map = calculateBasin(heightmap, rowPosition, columnPosition + 1, map)
    }
    return map
}

export const findBasins = (heightmap) => {
    const basins = []
    for (
        let rowPosition = 0;
        rowPosition < heightmap.length;
        rowPosition += 1
    ) {
        let row = heightmap[rowPosition]
        for (
            let columnPosition = 0;
            columnPosition < row.length;
            columnPosition += 1
        ) {
            const lowest = checkLowestPoint(
                heightmap,
                rowPosition,
                columnPosition
            )
            if (lowest === true) {
                const basin = calculateBasin(
                    heightmap,
                    rowPosition,
                    columnPosition
                )
                basins.push(Object.keys(basin).length)
            }
        }
    }
    return basins
}

export const findThreeLargestBasins = (basins) => {
    const sortedBasins = basins.sort((a, b) => b - a)
    return sortedBasins.slice(0, 3)
}

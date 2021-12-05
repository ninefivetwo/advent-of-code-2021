import { ventType } from './constants'

export const parseVentLines = (data) => {
    const vents = data.map((ventInfo) => {
        const coordsString = ventInfo.split(' -> ')
        const coords = coordsString.map((str) => {
            const nums = str.split(',').map((s) => Number(s))
            return nums
        })
        const vent = {
            start: coords[0],
            finish: coords[1],
        }
        return vent
    })
    return vents
}

const findMaxValue = (vents) => {
    let max = 0
    vents.forEach((vent) => {
        max = Math.max(max, ...vent.start, ...vent.finish)
    })
    return max
}

export const countOverlap = (map, threshold) => {
    let count = 0
    map.forEach((row) => {
        row.forEach((pos) => {
            if (pos >= threshold) {
                count += 1
            }
        })
    })
    return count
}

const createMap = (size = 999) => {
    const map = Array(size).fill(Array(size).fill(0))
    return map
}

const orderCoords = (coords) => {
    const coords1Value = coords[0].reduce((prev, next) => prev + next)
    const coords2Value = coords[1].reduce((prev, next) => prev + next)
    if (coords1Value <= coords2Value) {
        return [coords[0], coords[1]]
    }
    return [coords[1], coords[0]]
}

const getVentType = (vent) => {
    if (vent.start[1] === vent.finish[1]) {
        return ventType.horizontal
    }
    if (vent.start[0] === vent.finish[0]) {
        return ventType.vertical
    }
    if (
        Math.abs(vent.finish[0] - vent.start[0]) ===
        Math.abs(vent.finish[1] - vent.start[1])
    ) {
        return ventType.diagonal
    }
    return undefined
}

const drawVent = (map, vent) => {
    const updatedMap = map.map((line) => [...line])
    const [start, finish] = orderCoords([vent.start, vent.finish])
    const posIterator = (num) => num + 1
    const negIterator = (num) => num - 1
    const lessThanEqual = (a, b) => a <= b
    const greaterThanEqual = (a, b) => a >= b

    let iIterator = posIterator
    let iComparer = lessThanEqual
    let jIterator = posIterator
    let jComparer = lessThanEqual
    if (finish[0] < start[0]) {
        iIterator = negIterator
        iComparer = greaterThanEqual
    }
    if (finish[1] < start[1]) {
        jIterator = negIterator
        jComparer = greaterThanEqual
    }
    for (let i = start[0]; iComparer(i, finish[0]); i = iIterator(i)) {
        for (let j = start[1]; jComparer(j, finish[1]); j = jIterator(j)) {
            if (
                vent.type === ventType.horizontal ||
                vent.type === ventType.vertical
            ) {
                updatedMap[j][i] += 1
            } else if (vent.type === ventType.diagonal) {
                if (Math.abs(finish[0] - i) === Math.abs(finish[1] - j)) {
                    updatedMap[j][i] += 1
                }
            }
        }
    }

    return updatedMap
}

export const mapVents = (vents) => {
    const maxValue = findMaxValue(vents)
    let map = createMap(maxValue + 1)
    vents.forEach((vent) => {
        const type = getVentType(vent)
        vent.type = type
        const horizontal = type === ventType.horizontal
        const vertical = type === ventType.vertical
        if (horizontal || vertical) {
            map = drawVent(map, vent)
        }
    })
    return map
}

export const mapP2Vents = (vents) => {
    const maxValue = findMaxValue(vents)
    let map = createMap(maxValue + 1)
    vents.forEach((vent) => {
        const type = getVentType(vent)
        vent.type = type
        const horizontal = type === ventType.horizontal
        const vertical = type === ventType.vertical
        const diagonal = type === ventType.diagonal
        if (horizontal || vertical || diagonal) {
            map = drawVent(map, vent)
        }
    })
    return map
}

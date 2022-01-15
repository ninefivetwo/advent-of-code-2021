export const printGrid = (grid) => {
    console.log('\n')
    grid.forEach((row) => {
        const line = row.join('')
        console.log(line)
    })
    console.log('\n')
}

const cycleOctopus = (initialGrid, rowPos, colPos) => {
    let grid = initialGrid.map((row) => row.slice())
    // Increase energy on target octopus
    grid[rowPos][colPos] += 1

    // Simulate flash
    if (grid[rowPos][colPos] === 10) {
        // top row
        if (grid[rowPos - 1] !== undefined) {
            if (grid[rowPos - 1][colPos - 1] !== undefined) {
                grid = cycleOctopus(grid, rowPos - 1, colPos - 1)
            }
            if (grid[rowPos - 1][colPos + 1] !== undefined) {
                grid = cycleOctopus(grid, rowPos - 1, colPos + 1)
            }
            grid = cycleOctopus(grid, rowPos - 1, colPos)
        }
        // bottom row
        if (grid[rowPos + 1] !== undefined) {
            if (grid[rowPos + 1][colPos - 1] !== undefined) {
                grid = cycleOctopus(grid, rowPos + 1, colPos - 1)
            }
            if (grid[rowPos + 1][colPos + 1] !== undefined) {
                grid = cycleOctopus(grid, rowPos + 1, colPos + 1)
            }
            grid = cycleOctopus(grid, rowPos + 1, colPos)
        }
        // middle row
        if (grid[rowPos][colPos - 1] !== undefined) {
            grid = cycleOctopus(grid, rowPos, colPos - 1)
        }
        if (grid[rowPos][colPos + 1] !== undefined) {
            grid = cycleOctopus(grid, rowPos, colPos + 1)
        }
    }

    return grid
}

const resetFlash = (initialGrid) => {
    const grid = initialGrid.map((row) => row.slice())
    const size = grid.length
    let count = 0
    for (let rowPos = 0; rowPos < size; rowPos += 1) {
        for (let colPos = 0; colPos < size; colPos += 1) {
            if (grid[rowPos][colPos] > 9) {
                grid[rowPos][colPos] = 0
                count += 1
            }
        }
    }
    return { grid, count }
}

const runCycle = (initialGrid) => {
    let grid = initialGrid.map((row) => row.slice())
    const size = grid.length
    let flashCount = 0

    for (let rowPos = 0; rowPos < size; rowPos += 1) {
        for (let colPos = 0; colPos < size; colPos += 1) {
            grid = cycleOctopus(grid, rowPos, colPos)
        }
    }
    const result = resetFlash(grid)
    grid = result.grid
    flashCount += result.count

    return { grid, count: flashCount }
}

export const simulateOctopusFlashing = (initialGrid, steps = 1) => {
    let grid = initialGrid.map((row) => row.slice())
    let totalFlashes = 0

    for (let i = 0; i < steps; i += 1) {
        const result = runCycle(grid)
        grid = result.grid
        totalFlashes += result.count
    }

    return { grid, count: totalFlashes }
}

const syncedGrid = (grid) => {
    let synced = true
    grid.forEach((row) => {
        row.forEach((octopus) => {
            if (octopus !== 0) {
                synced = false
            }
        })
    })
    return synced
}

export const determineSyncedStep = (initialGrid) => {
    let grid = initialGrid.map((row) => row.slice())
    let steps = 0

    while (syncedGrid(grid) === false) {
        const result = simulateOctopusFlashing(grid)
        grid = result.grid
        steps += 1
    }

    return steps
}

export const minFuelUsage = (positions) => {
    const sortedPositions = positions.sort((a, b) => a - b)
    const midpoint = Math.floor(sortedPositions.length / 2)
    const idealPosition = sortedPositions[midpoint]

    const fuelCosts = positions.map((pos) => Math.abs(pos - idealPosition))
    const totalFuel = fuelCosts.reduce((a, b) => a + b)
    return totalFuel
}

const calculateFuelCost = (position, newPosition) => {
    const steps = Math.abs(position - newPosition)
    let totalFuelCost = 0
    let fuelCost = 1
    for (let i = 0; i < steps; i += 1) {
        totalFuelCost += fuelCost
        fuelCost += 1
    }
    return totalFuelCost
}

export const minAccumFuelUsage = (positions) => {
    //
}

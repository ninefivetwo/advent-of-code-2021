import { fishStages } from './constants'

export const simulateFishSpawn = (fishList, days = 1) => {
    const updatedFishList = [...fishList]
    for (let i = 0; i < days; i += 1) {
        updatedFishList.forEach((fish, idx) => {
            let agedFish = fish - 1
            if (agedFish < 0) {
                agedFish = fishStages.afterSpawn
                updatedFishList.push(fishStages.newSpawn)
            }
            updatedFishList.splice(idx, 1, agedFish)
        })
    }
    return updatedFishList
}

export const calculateFishPopulation = (fishList, days = 1) => {
    const fishCounts = Array(9).fill(0)
    fishList.forEach((fish) => {
        fishCounts[fish] += 1
    })

    for (let i = 0; i < days; i += 1) {
        const birthingFish = fishCounts.shift()
        fishCounts.push(0)
        fishCounts[fishStages.afterSpawn] += birthingFish
        fishCounts[fishStages.newSpawn] += birthingFish
    }

    const totalCount = fishCounts.reduce((a, b) => a + b)
    return totalCount
}

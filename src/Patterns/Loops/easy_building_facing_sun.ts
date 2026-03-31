/**
 * Given an input array height[] represntingg the heights of buildings, write 
 * a program to count the number of buildings facing the sunset. It is assumed
 * that the heights of all the buildings are distinct
 * 
 * Link: https://www.enjoyalgorithms.com/crack-coding-interviews/
 * 
 * Solution Types: 
 *  1. Single loop
 */

// Brute force solution

function buildingFacingSunBrute(height: number[]): number {
    // Keep track of MAX and count of the number of buildings facing sunset
    let MAX = -Infinity, count = 0

    for (let i = 0; i < height.length; i++) {
        const curr = height[i]
        if (curr > MAX) {
            MAX = curr
            count++
        }
    }

    return count
}

// const height = [7, 4, 8, 2, 9] // Output: 3
const height = [2, 3, 4, 5] // Output: 4
console.log(buildingFacingSunBrute(height))
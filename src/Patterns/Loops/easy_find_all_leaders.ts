/**
 * - Given an integer array X[] of size n, write a porgram to find all the 
 *  leaders in the array X[]. 
 * - An element is a leader if it is strictly greater than all the elements 
 *  to its right side.
 * 
 * Example1 -> X[] = [16,17,4,3,5,2]; Output = [17,5,2]
 * Example 2 -> X[] = [6,5,4,3,2,1]; Output = [6,5,4,3,2]
 * 
 * Link: https://www.enjoyalgorithms.com/crack-coding-interviews/
 */

function findAllLeadersBrute(X: number[]): number[] {
    const result: number[] = []
    let MAX = 0

    for (let i = X.length - 1; i >= 0; i--) {
        const curr = X[i]
        if (curr > MAX) {
            result.push(curr)
            MAX = curr
        }
    }
    return result
}

// const X = [16, 17, 4, 3, 5, 2] // output [17,5,2]
// const X = [6, 5, 4, 3, 2, 1] // output [6,5,4,3,2,1]
const X = [1, 2, 3, 3, 4, 5, 6] // output [6]

console.log(findAllLeadersBrute(X))
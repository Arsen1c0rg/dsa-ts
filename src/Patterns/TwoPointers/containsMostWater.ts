// https://www.enjoyalgorithms.com/crack-coding-interviews/

/**
 * Container with most rainwater 
 * @param X 
 * 
 * - For any index, travers right and find the smaller element on the right
 * - For any index, travers left and find the smaller element on the left
 * - For right traversal, return i-1
 * - For left traversal, return i
 * 
 * Why this i-1 vs i?
 * So for example, for the array => [1,5,6,3,4,2]
 * If we at idx 2, the smaller idx is 3 (3 -> value), but we only grab the last index that we can expand to
 */
function selfUnderstatingFail(X: number[]) {
    const n = X.length
    let max = -Infinity

    // for each index, we find the right smaller element
    // and left smaller element
    for (let i = 0; i < n; i++) {
        const ls = traverseLeft(X, i)
        const rs = traverseRight(X, i)
        console.log(i, X[i], ls, rs)
        max = Math.max(X[i] * (rs - ls), max)
    }

    return max

}

/**
 * @ignore
 */
function traverseRight(X: number[], idx: number): number {
    for (let i = idx; i < X.length; i++) {
        if (X[i] < X[idx]) {
            console.log({ idx, idxV: X[idx], returns: i - 1 })
            return i - 1
        }
    }

    return X.length - 1
}
/**
 * @ignore 
 */
function traverseLeft(X: number[], idx: number): number {
    console.log(`Traversing Lef
        t: index: ${idx}`)
    for (let i = idx; i >= 0; i--) {
        console.log(idx)
        if (X[i] < X[idx]) {
            console.log(idx, i)
            return i + 1
        }
    }

    return 0
}

// console.log(selfUnderstating([1, 5, 6, 3, 4, 2]))
console.log(selfUnderstatingFail([1, 8, 6, 2, 5, 4, 8, 3, 7]))


// 'Real Stuff
// We need to find 2 such lines, where
// the width and height will make the max area.
// Steps:
//  1. First we take 2 vertical lines
//  2. We get the min out of these 2 lines.
//  3. Then we find the differnece between 2 index to get the width
function selfBrute(X: number[]): number {
    const n = X.length
    let max = -Infinity
    // 2 loops, outer will travers through the array
    // inner loop will find the max area btwn 2 vertical lines
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let min = Math.min(X[i], X[j])
            let area = min * (j - i)
            max = Math.max(max, area)
        }
    }

    return max
}

console.log(selfBrute([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(selfBrute([1, 5, 6, 3, 4, 2]))


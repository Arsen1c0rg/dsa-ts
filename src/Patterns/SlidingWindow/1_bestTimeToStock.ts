function selfUnderstating(prices: number[]): number {

    let start = 0, end = 1, n = prices.length
    let maxprofit = -Infinity

    while (end < n) {
        if (prices[start] >= prices[end]) {
            console.log({ start, end })
            maxprofit = Math.max(prices[start] - prices[end])
            end++
            start++
        } else {
            maxprofit = Math.max(maxprofit, (prices[end] - prices[start]))
            end++
        }
    }

    return maxprofit
}

const input1 = [10, 1, 5, 6, 7, 1]
const input2 = [10, 8, 7, 5, 2]

console.log(selfUnderstating(input1))
console.log(selfUnderstating(input2))

function buySellStockBrute(prices: number[]): number {
    /* 
        arr: [7,1,5,3,6,4]
        output: 5 -> 1 - 6 = 5
    */
    let max = 0
    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++) {
            if (prices[i] < prices[j]) {
                max = Math.max(max, prices[j] - prices[i])
            }
        }
    }

    return max
}

console.log(buySellStockBrute([7, 1, 5, 3, 6, 4]))
console.log(buySellStockBrute([7, 6, 4, 3, 1]))

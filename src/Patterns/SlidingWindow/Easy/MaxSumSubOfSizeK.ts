function maxSubArrayOfSizeKBrute(nums: number[], k: number): number {
    let maxSum = -Infinity

    for (let i = 0; i < nums.length - k + 1; i++) {
        let sum = 0
        for (let j = i; j < i + k; j++) {
            sum += nums[j]
        }
        maxSum = Math.max(maxSum, sum)
    }

    return maxSum
}

console.log(maxSubArrayOfSizeKBrute([2, 1, 5, 1, 3, 2], 3));

// Using sliding window technique
function maxSubArrayOfSizeKOptimal(nums: number[], k: number): number {
    let windowSum = 0, windowStart = 0, windowEnd = 0, maxSum = -Infinity

    for (; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd]

        if (windowEnd >= k - 1) {
            maxSum = Math.max(maxSum, windowSum)

            // Move the window
            windowSum -= nums[windowStart]
            windowStart++
        }
    }

    return maxSum
}
console.log(maxSubArrayOfSizeKOptimal([2, 1, 5, 1, 3, 2], 3)); // outputs 9
console.log(maxSubArrayOfSizeKOptimal([2, 3, 4, 1, 5], 2)); // outputs 7
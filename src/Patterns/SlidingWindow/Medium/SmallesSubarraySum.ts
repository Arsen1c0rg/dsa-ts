/* 
    Problem Statement 

    Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous 
    subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

    Example 1:
    Input: [2, 1, 5, 2, 3, 2], S=7 
    Output: 2
    Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

    Example 2:
    Input: [2, 1, 5, 2, 8], S=7 
    Output: 1
    Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

    Example 3:
    Input: [3, 4, 1, 1, 6], S=8 
    Output: 3
    Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
*/


function smallestSubarraySumBrute(nums: number[], s: number): number {
    let minLength = Infinity

    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        // let length = 0

        for (let j = i; j < nums.length; j++) {
            sum += nums[j]

            if (sum >= s) {
                minLength = Math.min(j - i + 1, minLength)
            }

        }

    }
    return minLength
}

console.log(smallestSubarraySumBrute([2, 1, 5, 2, 3, 2], 7)); // outputs 2 
console.log(smallestSubarraySumBrute([2, 1, 5, 2, 8], 7)); // outputs 1
console.log(smallestSubarraySumBrute([3, 4, 1, 1, 6], 8)); // outputs 3


function smallestSubarraySumOptimal(nums: number[], s: number): number {
    let windowSum = 0, windowStart = 0, windowEnd = 0, minSum = Infinity

    for (; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd]

        while (windowSum >= s) {
            minSum = Math.min(minSum, windowEnd - windowStart + 1)

            windowSum -= nums[windowStart]
            windowStart++
        }
    }

    if (minSum === Infinity) return 0

    return minSum
}

console.log(smallestSubarraySumOptimal([2, 1, 5, 2, 3, 2], 7)); // outputs 2 
console.log(smallestSubarraySumOptimal([2, 1, 5, 2, 8], 7)); // outputs 1
console.log(smallestSubarraySumOptimal([3, 4, 1, 1, 6], 8)); // outputs 3
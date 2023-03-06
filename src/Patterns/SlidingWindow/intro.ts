/* 
    In many problems dealing with an array (or a LinkedList), we are asked to find or calculate something 
    among all the contiguous subarrays (or sublists) of a given size. For example, take a look at this problem:


    Given an array, find the average of all contiguous subarrays of size ‘K’ in it.        
    Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

    Here, we are asked to find the average of all contiguous subarrays of size ‘5’ in the given array. Let’s solve this:

    For the first 5 numbers (subarray from index 0-4), the average is: 
    (1+3+2+6−1)/5=>2.2(1+3+2+6−1)/5=>2.2

    The average of next 5 numbers (subarray from index 1-5) is: 
    (3+2+6−1+4)/5=>2.8(3+2+6−1+4)/5=>2.8

    For the next 5 numbers (subarray from index 2-6), the average is: 
    (2+6−1+4+1)/5=>2.4(2+6−1+4+1)/5=>2.4

    Here is the final output containing the averages of all contiguous subarrays of size 5:
    Output: [2.2, 2.8, 2.4, 3.6, 2.8]
*/

// Brute force approach, time complexity: O(n*k)
// where, n: number of elements and k: size 
function findAveragesOfSubarrayBrute(nums: number[], k: number): number[] {
    const result = []

    for (let i = 0; i < nums.length - k + 1; i++) {
        let sum = 0
        for (let j = i; j < i + k; j++) {
            sum += nums[j]
        }

        result.push(sum / k)
    }

    return result
}

console.log(findAveragesOfSubarrayBrute([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));

// Find Average of Subarray using Sliding Window
function findAveragesOfSubarraySubOptimal(nums: number[], k: number): number[] {
    const result = []
    let sum = 0

    // Calculate the sum of 1st 5 elements
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    /* 
        Up until this point, sum += 0...5 -> 11
        result.push(sum/k=5) -> [11/5] -> [2.2]
    */
    result.push(sum / k)


    for (let i = k; i < nums.length; i++) {
        // Add value of current element in the sum variable and 
        // subtract the value of i-k element
        sum += nums[i] - nums[i - k]

        // push the average
        result.push(sum / k)
    }

    return result

}

console.log(findAveragesOfSubarraySubOptimal([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));

function findAveragesOfSubarrayOptimal(nums: number[], k: number): number[] {
    let windowStart = 0, windowSum = 0
    const result = []

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        // Keep adding the first 5 elements 
        windowSum += nums[windowEnd]

        if (windowEnd > k - 1) {
            result.push(windowSum / k)
            // Subtract the 1st elements of the window
            windowSum -= nums[windowStart]
            windowStart++
        }
    }

    return result

}

console.log(findAveragesOfSubarraySubOptimal([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));


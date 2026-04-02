/**
 * For example, if the input is [-4, -1, 0, 3, 10], 
 * the output should be [0, 1, 9, 16, 100].
 * @param nums 
 */
function squareOfSortedArray(nums: number[]): number[] {
    // square each number  -> O(N) Space
    const squared = nums.map(item => item * item)

    console.log(squared)
    // sort the array -> O(n log n) Time 
    return squared.sort((a, b) => a - b)
}

/**
 * Loop through the array using two pointers [left & right]
    if (nums[left] > nums[right]) result.push(nums[])
 */

function optimalSquareOfSortedArray(nums: number[]): number[] {
    let left = 0, right = nums.length - 1

    let result = []


    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) result.push(nums[left++] ** 2)
        else result.push(nums[right--] ** 2)
    }

    return result.reverse()
}

// console.log(squareOfSortedArray([-4, -1, 0, 3, 10]))
console.log(optimalSquareOfSortedArray([-4, -1, 0, 3, 10]))
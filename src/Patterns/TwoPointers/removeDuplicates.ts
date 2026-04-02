// https://www.enjoyalgorithms.com/crack-coding-interviews/
/**
 * 
 * @param nums 
 * @returns 
 * 
 * - Excellent way to learn optimization using fast and slow pointers
 * - We have discussed 2 in-place solutions that takes O(n) time
 * 
 * 1. Brute force approach using extra memory
 * 2. Efficient approach using two pointiers
 * 3. TODO:
 */

function bruteForceRemoveDups(nums: number[]): any {
    let j = 0, n = nums.length
    let unique = []
    let count = 0

    for (let i = 0; i < n; i++) {
        if (nums[i] != nums[i + 1]) {
            unique[count] = nums[i]
            count++
        }
    }

    unique[count] = nums[n - 1]
    count++
    for (let i = 0; i < n; i++) {
        nums[i] = unique[i]
    }

    return count
}


function customUnderstanding(nums: number[]) {
    let l = 0, r = 0, n = nums.length

    while (r < n) {
        if (nums[r] !== nums[l]) {
            console.log({ r, l, v: nums[r] })
            console.log(true)
            nums[++l] = nums[r]
            console.log(nums)
        }

        r++
    }
    console.log(nums)
    return l
}

console.log(customUnderstanding([2, 2, 2, 3, 3]))
// console.logrbruteForceRemoveDups([1, 1, 2]))
// customUnderstanding([1, 1, 2])
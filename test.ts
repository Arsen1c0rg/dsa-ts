/**
 * - video streams lena hai
 * - SDP offer
 * - FCM k through saamne waale ko bhejna hai
 * - ICE candidate listen karna chalu kar dega 2nd user
 * - Connection -> ICE candidates
 */

/**
 * 
 * @param nums 
 * @returns 
 */
function reverseArray(nums: number[]): number[] {

    let l = 0, r = nums.length - 1

    while (l < r) {
        const temp = nums[l]
        nums[l] = nums[r]
        nums[r] = temp

        l++
        r--
    }
    return nums
}


console.log(reverseArray([1, 2, 3, 4, 5]))

/* 
    Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; 
    after removing the duplicates in-place return the new length of the array.

    Example 1:

    Input: [2, 3, 3, 3, 6, 9, 9]
    Output: 4
    Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

    Example 2:

    Input: [2, 2, 2, 11]
    Output: 2
    Explanation: The first two elements after removing the duplicates will be [2, 11].
*/

function removeDuplicates(nums: number[]): number {
    /* 
        - intialize 2 variables(pointers) as 1.
        - "i" will traverse through the whole array and "nextDup"(slow pointer) will keep track of next non-duplicate number
        - if nums[nextDup] !== nums[i] { change the value of nums[nextDup] to nums[i]}, meaning, replace the element with non-dup found by the fast pointer
        - increment nextDup's value. the value that nextDup will hold is the count of unique values.
        - return nextDup
    */
    let i = 1, nextDup = 1

    while (i < nums.length) {
        if (nums[nextDup - 1] !== nums[i]) {
            nums[nextDup] = nums[i]
            nextDup++
        }

        i++
    }

    return nextDup
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));

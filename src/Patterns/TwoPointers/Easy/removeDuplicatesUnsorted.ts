function removeDupsUnsortedKey(nums: number[], k: number): number {
    let total = 0, i = 0

    while (i < nums.length) {
        if (nums[i] !== k) {
            total++
        }
        i++
    }
    return total
}

// Using Two Pointers approach
function removeDupsUnsortedKey2PTR(nums: number[], k: number): number {
    let nextDup = 0, r = 0
    while (r < nums.length) {
        if (nums[r] !== k) {
            nums[nextDup] = nums[r]
            nextDup++
        }
        r++
    }

    return nextDup
}

console.log(removeDupsUnsortedKey([3, 2, 3, 6, 3, 10, 9, 3], 3)); // output 4
console.log(removeDupsUnsortedKey([2, 11, 2, 2, 1], 2)); // output 2

console.log(removeDupsUnsortedKey2PTR([3, 2, 3, 6, 3, 10, 9, 3], 3)); // output 4
console.log(removeDupsUnsortedKey2PTR([2, 11, 2, 2, 1], 2)); // output 2
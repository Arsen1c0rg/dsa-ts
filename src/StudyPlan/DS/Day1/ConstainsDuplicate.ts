function containsDuplicateBrute(nums: number[]): boolean {
    /* Bruteforce approach, O(n^2)*/

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (j === i) continue

            if (nums[i] === nums[j]) {
                return true
            }
        }
    }

    return false
}

function containsDuplicateOptimal(nums: number[]): boolean {
    /* Optimal Solution, O(n) */
    const m = new Map<number, number>()

    // Fill the map with the element and its index
    for (let i = 0; i < nums.length; i++) {
        if (m.has(nums[i])) return true

        m.set(nums[i], i)
    }
    console.log(m);


    return false
}

console.log(containsDuplicateBrute([1, 2, 3, 1])); // should return true
console.log(containsDuplicateBrute([1, 2, 3, 4])); // should return true

console.log(containsDuplicateOptimal([1, 2, 3, 1])); // should return true
console.log(containsDuplicateOptimal([1, 2, 3, 4])); // should return true
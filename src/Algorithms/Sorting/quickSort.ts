/* 
    - O(n log n)
    - excellent for understating recursion
*/
function quickSort(nums: number[], l: number, r: number): number[] {
    const n = nums.length
    if (n <= 1) return arr
    // let l = 0, r = n - 1

    // parition function will divide the array
    // into l & r and return the pivotIndex
    if (l < r) {
        const pivotIndex = partition(nums, l, r)
        console.log(pivotIndex)
        quickSort(nums, l, pivotIndex - 1)
        quickSort(nums, pivotIndex + 1, r)
    }

}

function partition(nums: number[], l: number, r: number) {
    const n = nums.length
    const pivot = nums[r]
    let i = l - 1 // -1


    for (let j = 0; j < r; j++) {
        if (nums[j] < pivot) {
            i++
            let it = nums[i]
            nums[i] = nums[j]
        }
    }

    return i + 1
}

const nums = [3, 2, 9, 7, 1, 5]

console.log(quickSort(nums, 0, nums.length - 1))
// i = -1, j = 0
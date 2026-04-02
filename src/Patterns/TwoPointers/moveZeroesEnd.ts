// https://www.enjoyalgorithms.com/crack-coding-interviews/

/* 
    Input: X[] = [4,8,0,0,2,0,1,0]
    Ouput: X[] = [4,8,2,1,0,0,0,0]
*/
// Brute force
function bruteMoveZeroesEnd(nums: number[]) {
    const n = nums.length
    const output = Array(n).fill(0)
    let track = 0
    for (let i = 0; i < n; i++) {
        const curr = nums[i]
        if (curr > 0) {
            output[track] = curr
            track++
        } else {
            continue
        }
    }

    return output
}
console.log(
    bruteMoveZeroesEnd([4, 8, 0, 0, 2, 0, 1, 0]))
// no need to return an array, just change it in-place
function twoLoops(nums: number[]): number[] {
    // Two Pointer Approach -> Start both the pointers at index 0

    // whenever we hit a non-zero number
    //  - change the value of nums[j] = nums[i]
    //  - increment j by
    // else just keep incrementing i
    const n = nums.length
    let j = 0

    for (let i = 0; i < n; i++) {
        const curr = nums[i]

        if (curr !== 0) {
            let jc = nums[j]
            nums[j] = nums[i]
            nums[i] = jc
            j++
        }
    }

    // while (j < n) {
    //     nums[j] = 0
    //     j++
    // }

    return nums
}

// just change it in-place
function singleLoop(nums: number[]): number[] {
    /* 
         We can see a pattern in the solution above
         - Between 0 -> j: all the element are non-zero
         - between j -> i: all the elements are zero
         - between i -> n-1: we dont know

        When the X[i] is non-zero
        Instead of just updating X[j] with X[i],
        we swap the first zero element Xj, with Xi
        so we wouldnt need to fill the rest of the array with zeroes

        Note: this solution is similar to the parition process
            of the quickSort algorithm
    */


    for (let i = 0, j = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let jc = nums[j]
            nums[j] = nums[i]
            nums[i] = jc
            j++
        }
    }

    return nums
}

// in-place brute force
function revisionBrute(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[j] != 0) {
                let t = nums[i]
                nums[i] = nums[j]
                nums[j] = t
                break
            }
        }
    }

    return nums
}



// two pointer technique
function revisionOptimised(nums: number[]): number[] {
    console.log(`Length: ${nums.length}`)
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(i)
        if (nums[i] !== 0) {
            let c = nums[j]
            nums[j] = nums[i]
            nums[i] = c
            j++
        }
    }

    return nums
}

console.log(revisionBrute([4, 8, 0, 0, 2, 0, 1, 0]))
console.log(revisionOptimised([4, 8, 0, 0, 2, 0, 1, 0]))
// console.log(twoLoops([4, 8, 0, 0, 2, 0, 1, 0]))
// console.log(singleLoop([4, 8, 0, 0, 2, 0, 1, 0]))
// console.log(bruteMoveZeroesEnd([0, 1, 0, 3, 12]))
console.log(revisionBrute([0, 1, 0, 3, 12]))
// console.log(withoutCopySolution([0, 1, 0, 3, 12]))
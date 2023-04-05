/* 

*/

function pairWithTargetSumBrute(nums: number[], sum: number): number[] {
    /* 
        [1,2,3,4,6], sum = 6

        iteration 1: i = 0, j = i+1
                    sum = nums[i] + nums[j] = 1 + 2 = 3
        - iterate through the whole array
        - keep 
    */
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let total = nums[i] + nums[j]
            if (total === sum) {
                return [i, j]
            }
        }
    }

    return []
}

console.log(pairWithTargetSumBrute([1, 2, 3, 4, 6], 6));


function pairWithTargetSum(nums: number[], sum: number): number[] {
    // Using two pointer approach

    let l = 0, r = nums.length - 1

    while (l <= r) {
        let total = nums[l] + nums[r]

        if (total < sum) {
            l++
        }
        if (total > sum) {
            r--
        }

        if (total === sum) {
            return [l, r]
        }
    }

    return []
}

console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6));

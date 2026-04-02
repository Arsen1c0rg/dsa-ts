// Link: https://neetcode.io/problems/top-k-elements-in-list?list=neetcode150
// Return the "k" most frequent elements in the array
// [1, 2, 2, 3, 3, 3] => [2,3]

function solution(nums: number[], k: number) {
    const h = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        // check if this number exists in the hashMap
        // if exists, increment the value
        if (h.has(nums[i])) {
            h.set(h.get(nums[i]++) as number, (h.get(nums[i] + 1) as number))
        }
    }

    console.log(h)
}

function sol(nums: number[], k: number) {
    // for each element, am gonna store the count of it in a  Map
    const m = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i]
        if (m.has(curr)) {
            let c = m.get(curr)!
            m.set(curr, c + 1 as number)
        } else {
            m.set(curr, 1)
        }
    }

    console.log(m)
    return m
}

const n = [1, 2, 2, 3, 3, 3]
const k = 2
// solution(n, k) // [2,3]
sol(n, k)
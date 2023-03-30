/* 
    Pair with Target Sum

    Input: [1, 2, 3, 4, 6], target=6
    Output: [1, 3]
    Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
*/

function pairWithTargetSumTest(nums: number[], t: number): number[] {
    let i = 0, j = nums.length - 1

    while (i < j) {
        let sum = nums[i] + nums[j]

        if (sum === t) return [i, j]

        if (sum > t) j--
        else i++
    }

    return [0, 0]
}
console.log(pairWithTargetSumTest([1, 2, 3, 4, 6], 6));
console.log(pairWithTargetSumTest([2, 5, 9, 11], 11));

function removeDupsTestBrute(nums: number[]): number {
    const set = new Set()

    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i])
    }

    return set.size
}
console.log(removeDupsTestBrute([2, 3, 3, 3, 6, 9, 9])); // outputs 4
console.log(removeDupsTestBrute([2, 3, 3, 3, 6, 9, 9])); // outputs 4

function removeDupsTestOptimal(nums: number[]): number {
    let i = 0, j = 1, sum = 1

    // not modifying the array

    // while (j < nums.length) {
    //     if (nums[i] !== nums[j]) {
    //         i = j
    //         sum++
    //     }
    //     j++
    // }

    // Modify the array and bring the unique characters to the front
    while (j < nums.length) {
        if (nums[i] !== nums[j]) {
            nums[i + 1] = nums[j]
            i++
            sum++
        }
        j++
    }

    console.log(nums);

    return sum
}

console.log(removeDupsTestOptimal([2, 3, 3, 3, 6, 9, 9])); // outputs 4
console.log(removeDupsTestOptimal([2, 2, 2, 11])); // outputs 2

/* Find cycle in a linked list */

// Node Class
class NodeTest {
    val: number
    next: NodeTest | null

    constructor(val: number, next = null) {
        this.val = val
        this.next = next
    }
}
const head = new NodeTest(1)
head.next = new NodeTest(2)
head.next.next = new NodeTest(3)
head.next.next.next = new NodeTest(4)
head.next.next.next.next = new NodeTest(5)
head.next.next.next.next.next = new NodeTest(6)
head.next.next.next.next.next.next = new NodeTest(3)

function hasCycle(head: NodeTest): boolean {
    let s = head, f = head

    while (f !== null && f.next !== null) {
        f = f.next.next
        s = s.next

        if (f === s) {
            return true
        }
    }

    return false
}

console.log(hasCycle(head));

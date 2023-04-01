import { LinkedListNode } from "../../../Data-Structures/SinglyLinkedList";

// form a linkedlist
const head = new LinkedListNode<number>(1)
head.next = new LinkedListNode<number>(2)
head.next.next = new LinkedListNode<number>(3)
head.next.next.next = new LinkedListNode<number>(4)
head.next.next.next.next = new LinkedListNode<number>(5)
head.next.next.next.next.next = new LinkedListNode<number>(6)
// create a linkedlist cycle
head.next.next.next.next.next.next = head.next

function hasCycleBrute(head: LinkedListNode<number>): boolean {
    // map of type LinkedListNode -> number
    const map = new Map<LinkedListNode<number>, number>()

    let i = head

    // loop through the linkedlist
    while (i !== null && i.next !== null) {
        // if the node already exists in the map, return true
        if (map.has(i)) return true

        // add the node to the map and set its value as 1
        map.set(i, 1)
        // move to the next node
        i = i.next
    }

    for (const [_, v] of map) {
        // if any value is more than 1, return true
        if (v > 1) return true
    }

    return false
}

console.log(hasCycleBrute(head)); // outputs true

function hasCycleOptimal(head: LinkedListNode<number> | null): boolean {
    // initialize left and right pointer. left -> slow; r -> fast
    let l = head, r = head

    // while l, r and r.next is not null
    while ((l !== null) && r !== null && r.next !== null) {
        // move the pointers
        l = l.next
        r = r.next.next

        // if l and r are same, return true
        if (l === r) return true
    }

    return false
}

console.log(hasCycleOptimal(head)); // outputs true
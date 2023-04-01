import { LinkedListNode } from "../Data-Structures/SinglyLinkedList"

/* A linkedlist that contains a cycle */
export function ListWithCycle<T>(hasCycle: boolean) {
    // form a linkedlist
    const head = new LinkedListNode(1)
    head.next = new LinkedListNode(2)
    head.next.next = new LinkedListNode(3)
    head.next.next.next = new LinkedListNode(4)
    head.next.next.next.next = new LinkedListNode(5)
    head.next.next.next.next.next = new LinkedListNode(6)

    if (hasCycle) {
        // create a linkedlist cycle
        head.next.next.next.next.next.next = head.next
    }

    return head
}
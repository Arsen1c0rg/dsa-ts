import { LinkedListNode, SinglyLinkedList } from "../../../Data-Structures/SinglyLinkedList";
import { ListWithCycle } from "../../../helpers/LinkedList";

/* 
    LinkedList: 1 -> 2 -> 3 -> 4 -> 5 -> 6
*/

const head = ListWithCycle(false)

/* Bruteforce solution */
function middleOfLinkedListBrute(head: LinkedListNode<number>): LinkedListNode<number> | null {
    /* 
        - get the lenght of the linkedlist
        - find the mid. if odd use Math.ceil, else length / 2
        - set length = 0
        - traverse from the head of the linkedlist upto the mid of the linkedlist using the MID value we found
        
        - Time Complexity: O(N), n -> length of the linkedlist
        - Space Complexity: O(1)
    */

    if (!head) return null

    // get the length of the linked list
    let length = 0, s = head

    // caclculate the length of the linkedlist
    while (s !== null && s.next !== null) {
        length++
        s = s.next
    }

    // if length is odd, then use Math.ceil to round up the number to the upper bound else just length/2
    let mid = length % 3 === 0 ? Math.ceil(length / 2) : length / 2
    // reset the value of s and length
    s = head, length = 0

    // lenght < mid, because we set length to 0, so think from 0th index
    while (s !== null && length < mid) {
        length++
        s = s.next!
    }

    return s
}

console.log(middleOfLinkedListBrute(head)); // Outputs: Array<LinkedlistNode<number>> => [4,5,6] 

/* Optimal Solution */
function middleOfLinkedListOptimal(head: LinkedListNode<number>): LinkedListNode<number> | null {
    /* 
        - Using faster and slow pointer (Hare and Tortoise method)
        - if the fast pointer reaches null, then the slow pointer will always be as the Middle of the linked list
    */

    // if head is null return null
    if (!head) return null

    let fastPointer = head

    while (fastPointer !== null && fastPointer.next !== null) {
        head = head.next!
        fastPointer = fastPointer.next.next!
    }

    return head
}
console.log(middleOfLinkedListOptimal(head)); // outputs: Array<LinkedListNode<number>> : [4,5,6]

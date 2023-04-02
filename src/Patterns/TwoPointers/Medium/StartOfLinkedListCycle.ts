/* 
    142. Linked List Cycle II

    Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
    There is a cycle in a linked list if there is some node in the list that can be reached again by continuously 
    following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

    Do not modify the linked list.

    Input: head = [3,2,0,-4], pos = 1
    Output: tail connects to node index 1
    Explanation: There is a cycle in the linked list, where tail connects to the second node.

*/
import { LinkedListNode } from "../../../Data-Structures/SinglyLinkedList"
import { ListWithCycle } from "../../../helpers/LinkedList"

// linkedlist with a cycl
const head = ListWithCycle(true)

// Using a hashset. Time Complextiy: O(N) & Space Complexity: O(N)
function startOfLinkedListCycleBrute(head: LinkedListNode<number>): LinkedListNode<number> | null {
    // a set to contain all the nodes in the linked list
    const hashSet = new Set()

    // traverse through the linked list
    while (head !== null && head.next !== null) {
        // if set already had the current node, return the node
        if (hashSet.has(head)) return head

        // add the node to the set
        hashSet.add(head)

        // move the pointer to the next node
        head = head.next
    }

    return null
}

console.log(startOfLinkedListCycleBrute(head));

// Two Pointer approach. Time: O(N) & Space: O(1)
function startOfLinkedListCycleOptimal(head: LinkedListNode<number>): LinkedListNode<number> | null {
    console.log(head);

    /* 
        - Find the cycle and calculate the length of the cycle. Lets say "K"
        - Move pointer2/Faster pointer by K elements
        - From there, move both, slow and fast pointer until they collide
    */

    let s = head, f = head, hasCycle = false, count = 1

    // Detect the loop
    while (f.next !== null && f !== null) {
        s = s.next!
        f = f.next.next!

        if (f === s) {
            hasCycle = true
            break
        }
    }

    if (!hasCycle) return null

    s = s.next!
    while (s !== f) {
        count++
        s = s.next!
    }

    // Find the first cycle
    s = head, f = head
    // move pointer2 ahead cycle_length
    while (count > 0) {
        f = f.next!
        count--
    }

    while (s !== f) {
        f = f.next!
        s = s.next!
    }

    return s
}

console.log(startOfLinkedListCycleOptimal(head));

function detectCycleAlternative(head: LinkedListNode<number> | null): LinkedListNode<number> | null {
    if (!head || !head.next) {
        return null;
    }

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next!;

        if (slow === fast) {
            slow = head;
            while (slow !== fast) {
                slow = slow.next!;
                fast = fast.next!;
            }
            return slow;
        }
    }

    return null;
}
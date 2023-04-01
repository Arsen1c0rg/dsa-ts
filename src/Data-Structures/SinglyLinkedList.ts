export class LinkedListNode<T>{
    val: T | null
    next: LinkedListNode<T> | null

    constructor(val: T | null, next: LinkedListNode<T> | null = null) {
        this.val = val
        this.next = next
    }
}

export class SinglyLinkedList<T> {
    head: LinkedListNode<T> | null = null

    /* Append to the linkstlist */
    append(data: T) {
        // if no head, create head
        if (!this.head) this.head = new LinkedListNode(data)
        else {
            let curr = this.head
            // move the current head
            while (curr.next !== null) {
                curr = curr.next
            }

            // append a new linkestlist node to the current last node
            curr.next = new LinkedListNode(data)

            // return the new tail of the linkedlist
            return curr.next
        }
    }
}

// const linkedList = new SinglyLinkedList()
// linkedList.append(1)
// linkedList.append(2)

// console.log(linkedList.head);

/* 
    Output:

    SinglyLinkedList {
        head: LinkedListNode {
            val: 1,
            next: LinkedListNode { val: 2, next: null }
        }
    }
*/

/* class LListNode<T> {
    value: T
    next: T | null

    constructor(value: T, next: T | null = null) {
        this.value = value
        this.next = next
    }
}

function hasCycle(head: ListNode): boolean {
    let l = head, r = head

    while (r !== null || r.next !== null) {
        r = r.next.next
        l = l.next

        if (r === l) {
            return true
        }
    }

    return false
}

const head = new LListNode(1)
head.next = new LListNode(2)
head.next.next = new LListNode(3)
console.log(head);

console.log(hasCycle(head));

 */
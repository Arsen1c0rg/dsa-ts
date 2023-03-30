class ListNode<T> {
    next: ListNode<T> | null = null
    prev: ListNode<T> | null = null

    constructor(data: T) { }
}

// linkedlist api
interface ILinkedList<T> {
    prepend(data: T): ListNode<T>
    // append(data: T): ListNode<T>
    // delete(node: ListNode<T>): void
    // size(): number

    // traverse(): T[]
    // search(comparator: (data: T) => boolean): Node<T> | null
}

class LinkedList<T> implements ILinkedList<T> {
    private head: ListNode<T> | null = null

    prepend(data: T): ListNode<T> {
        const node = new ListNode(data)

        if (!this.head) {
            this.head = node
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        return node
    }
}

interface Post {
    title: string
}

const ll = new LinkedList<Post>()

ll.prepend({ title: "Post A" })

console.log(ll);

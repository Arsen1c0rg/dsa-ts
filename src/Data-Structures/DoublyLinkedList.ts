class DLL_Node<T> {
    data: T
    next: DLL_Node<T> | null
    prev: DLL_Node<T> | null

    constructor(
        data: T,
    ) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList<T> {
    public head: DLL_Node<T> | null
    public tail: DLL_Node<T> | null
    public len: number

    constructor() {
        this.head = null
        this.tail = null
        this.len = 0
    }

    // Add nodes to the list start
    prepend(data: T): void {
        const newNode = new DLL_Node<T>(data)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }

        this.len++
    }

    // Adds node to the list end
    append(data: T): void {
        const newNode = new DLL_Node<T>(data)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail!.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.len++
    }

    // removes and returns head node data
    deleteHead(): T | null {
        if (!this.head) return null

        const removedNode = this.head
        const data = removedNode.data

        if (this.head) {
            this.head = removedNode.next
        } else {
            this.tail = null
        }

        removedNode.next = null
        removedNode.prev = null

        this.len--
        return data
    }

    // removes and returns tail node data
    deleteTail(): T | null {
        return null
    }

    // removes first node with given data
    delete(data: T): boolean {
        return false
    }

    // find nodes at given index
    find(idx: T): DLL_Node<T> | null {
        return null
    }

    // returns array of node data
    traverse(): T[] {
        return []
    }

    // insert node at given index
    insertAt(idx: number, data: T): boolean {
        return false
    }
}


// const node1 = new DLL_Node<number>(10)
// console.log(node1)

const dll1 = new DoublyLinkedList<number>
// dll1.prepend(10)
dll1.append(100)
// dll1.append(200)
// dll1.prepend(11)
dll1.deleteHead()

console.log(dll1)
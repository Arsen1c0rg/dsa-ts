/**
 * LRUCache(int capacity)
 * int get(int key)
 * void put(int key, int value)
 * 
 * Specifications of LRUCache
 *  Access time for any item should be O(1)
 *  Get LRU element in O(1)
 *  Put any item should be O(1)
 *  Space should be O(n)
 */

interface INode {
    key: number
    val: number
    prev: INode | null
    next: INode | null
}

class LRUCache {
    public cap: number
    public size: number
    public head: INode | null
    public tail: INode | null
    public cache: Map<number, INode> | null

    constructor(
        cap: number,
        head: { key: 0, val: 0, prev: null, next: null },
        tail: { key: 0, val: 0, prev: null, next: null }
    ) {
        this.cap = cap
        this.size = 0
        this.head = tail
        this.tail = head
        // empty cache
        this.cache = new Map<number, INode>()
    }


    get(key: number): number {
        // if doesnt exists, return -1
        if (!this.cache?.has(key)) return -1

        // get the node, remove the node and make this node the head
        const node = this.cache.get(key)
        removeNode(node) // returns the removed node
        addHead(node)

        return node!.val
    }

    // remove node
    removeNode(node: INode): void {
        if (!node) return

        node.prev!.next = node.next
        node.next!.prev = node.prev
    }

    // add head
    addHead(node: INode): void {
        node.next = this.head!.next
        node.prev = this.head
        this.head!.next!.prev = node
    }
}
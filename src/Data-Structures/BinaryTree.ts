export class BinarySearchTreeNode<T>{
    data: T
    leftNode?: BinarySearchTreeNode<T>
    rightNode?: BinarySearchTreeNode<T>

    constructor(data: T) {
        this.data = data
    }
}

class BinarySeachTree<T> {
    root?: BinarySearchTreeNode<T>
    comparator: (a: T, b: T) => number

    constructor(comparator: (a: T, b: T) => number) {
        this.comparator = comparator
    }

    insert(data: T): BinarySearchTreeNode<T> | undefined {
        // if theres not root node, then add a root node
        if (!this.root) {
            this.root = new BinarySearchTreeNode(data)
            return this.root
        }

        let current = this.root

        while (true) {
            // if current data is more than the root node,
            if (this.comparator(data, current.data) === 1) {
                // if rightNode exists
                if (current.rightNode) {
                    // traverse right
                    current = current.rightNode
                } else {
                    // insert to the right
                    current.rightNode = new BinarySearchTreeNode(data)
                    return current.rightNode
                }
            } else {
                // else current data is less than root node data
                if (current.leftNode) {
                    current = current.leftNode
                } else {
                    current.leftNode = new BinarySearchTreeNode(data)
                    return current.leftNode
                }
            }
        }
    }

    // Search method
    search(data: T): BinarySearchTreeNode<T> | undefined {
        // if no root, return undefined
        if (!this.root) return undefined

        let current = this.root

        while (this.comparator(data, current.data) !== 0) {
            console.log(`Comparing ${data}, ${current.data}`);

            if (this.comparator(data, current.data) === 1) {
                if (!current.rightNode) return

                current = current.rightNode
            } else {
                if (!current.leftNode) return
                current = current.leftNode
            }
        }

        return current
    }


    // inOrderTraversal method
    inOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
        if (node) {
            this.inOrderTraversal(node.leftNode)
            console.log(node.data); // 1, 5, 10
            this.inOrderTraversal(node.rightNode)

        }
    }
}

// Comparator function
function comparator(a: number, b: number) {
    if (a < b) return -1
    if (a > b) return 1

    return 0
}

const bst = new BinarySeachTree(comparator)

bst.insert(5)
bst.insert(10)
bst.insert(1)

console.log(bst.search(101));

bst.inOrderTraversal(bst.root)

// console.log(bst);

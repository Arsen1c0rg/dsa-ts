class TreeNode {
    data: number | null
    left?: TreeNode | null
    right?: TreeNode | null

    constructor(data: number) {
        this.data = data
    }
}

const traverse = (root: TreeNode): number[][] => {
    const result = Array<number[]>()
    const queue = Array<TreeNode>()

    queue.push(root)

    while (queue.length > 0) {
        // get current level size
        const currLevelSize = queue.length
        const currLevel = Array<number>()

        for (let i = 0; i < currLevelSize; i++) {
            let currNode = queue.shift()

            // Push the value to currLevel array
            if (currNode?.data) currLevel.push(currNode.data)

            // push the left and right nodes of the queue
            if (currNode?.left) queue.push(currNode.left)
            if (currNode?.right) queue.push(currNode.right)
        }

        result.push(currLevel)
    }

    return result
}

const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

// console.log(root);
console.log(traverse(root))

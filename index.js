function inOrder(currentNode) {
    if (currentNode.left) {
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if (currentNode.right) {
        inOrder(currentNode.right)
    }
}

function findOrAdd(currentNode, newNode) {
    if (currentNode.data === newNode.data) {
        return true
    }
    if (currentNode.data < newNode.data) {
        if (currentNode.right) {
            return findOrAdd(currentNode.right, newNode)
        } else {
            return currentNode.right = newNode
        }
    }
    if (currentNode.data > newNode.data) {
        if (currentNode.left) {
            return findOrAdd(currentNode.left, newNode)
        } else {
            return currentNode.left = newNode
        }
    }
}

function max(currentNode) {
    if (!currentNode.right) {
        return currentNode
    } else {
        return max(currentNode.right)
    }
}

function min(currentNode) {
    if (!currentNode.left) {
        return currentNode
    } else {
        return min(currentNode.left)
    }
}
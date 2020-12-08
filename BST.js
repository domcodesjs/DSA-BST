class Node {
  constructor(key, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const node = this.root;

    if (node === null) {
      this.root = new Node(key);
    } else {
      const searchTree = (node) => {
        if (key < node.key) {
          if (node.left === null) {
            return (node.left = new Node(key));
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (key > node.key) {
          if (node.right === null) {
            return (node.right = new Node(key));
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  find(key) {
    let current = this.root;
    while (current.key !== key) {
      if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }

    return current;
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.key;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.key;
  }

  findThirdLargest() {
    let current = this.root;
    let count = 0;
    while (count !== 3 && current !== null) {
      if (current.right === null) {
        return 'A 3rd right node does not exist';
      }
      current = current.right;
      count++;
    }
    return current.key;
  }

  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  isValidBST(node, min = null, max = null) {
    if (!node) {
      return true;
    }

    if (max !== null && node.key >= max) {
      return false;
    }

    if (min !== null && node.key <= min) {
      return false;
    }
    const leftSide = this.isValidBST(node.left, min, node.key);
    const rightSide = this.isValidBST(node.right, node.key, max);

    return leftSide && rightSide;
  }
}

module.exports = BinarySearchTree;

const BinarySearchTree = require('./BST');

const mainOne = () => {
  const BST = new BinarySearchTree();

  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);

  console.log(BST.findThirdLargest());
  console.log(BST.isBalanced());
};

// mainOne();

const mainTwo = () => {
  const BST = new BinarySearchTree();

  BST.insert('E');
  BST.insert('A');
  BST.insert('S');
  BST.insert('Y');
  BST.insert('Q');
  BST.insert('U');
  BST.insert('E');
  BST.insert('S');
  BST.insert('T');
  BST.insert('I');
  BST.insert('O');
  BST.insert('N');

  // console.log(BST.findThirdLargest());
  console.log(BST.isValidBST());
};

mainTwo();

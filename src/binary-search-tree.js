const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addElement(this.rootTree, data)
    
    function addElement (element, data) {
      if (!element) return new Node(data)
    
      if (element.data === data) return element
 
      element.data > data ? element.left = addElement(element.left, data) : element.right = addElement(element.right, data)
      return element
    }
  }

  has(data) {
    return hasElement (this.rootTree, data)
    
    function hasElement (element, data) {
      if (!element) return false;
      if (element.data === data) return true;

      return element.data > data ? hasElement (element.left, data) : hasElement (element.right, data)
    }
  }

  find(data) {
    return findElement (this.rootTree, data)
    
    function findElement (element, data) {
      if (!element) return null;
      if (element.data === data) return element;

      return element.data > data ? findElement (element.left, data) : findElement (element.right, data)
    }
  }

  remove(data) {
    this.rootTree = removeElement(this.rootTree, data)
    
    function removeElement (element, data) {
      if (!element) return null;


      if (element.data === data) {
        if (!element.left && ! element.right) return null

        if (element.left && element.right) {
          let minElement = element.right;
          while(minElement.left) {
            minElement = minElement.left
          }
          element.data = minElement.data
          element.right = removeElement (element.right, minElement.data)
            return element;
        }

        if (element.right) {
          element = element.right;
          return element
        }

        if (element.left) {
          element = element.left
          return element
        }
      }

      element.data > data ? element.left = removeElement(element.left, data) : element.right = removeElement(element.right, data)
      return element;
    }
  }

  min() {
    if (!this.rootTree) return undefined;
    let node = this.rootTree
    while(node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.rootTree) return undefined;
    let node = this.rootTree
    while(node.right) {
      node = node.right
    }
    return node.data    
  }
}

module.exports = {
  BinarySearchTree
};
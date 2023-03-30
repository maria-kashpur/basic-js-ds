const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, key) {
  // если list пустой
  if (!list) {
    return null
  }
  
  // если list не пустой, то мы должы построить новые связи

  // работаем с самими узлами
  // создем переменную, куда будем помещать удаляемый узел
  let deletedNode = null;

  while (list && list.value === key) { 
    // кладем удаляемый узел в переменную
    deletedNode = list.value;
    // следующий узел кладем на место удаляемого  
    list = list.next;
  }

  // создаем переменную для хранения текущего узла
  let currentNode = list;

  // работаем с ссылками на следующие узлы
  while (currentNode.next) {
    //если текущий узел имеет ссылку на удаляемый узел
    if (currentNode.next.value === key) {
      // удаляем ссылку 
      deletedNode = currentNode.next;
      // перезаписываем ссылку  - ссылаемся на узел через один
      currentNode.next = currentNode.next.next;
    } else { 
      currentNode = currentNode.next;
    }
  }

  return list;
}

module.exports = {
  removeKFromList
};

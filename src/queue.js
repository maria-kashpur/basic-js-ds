const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    // ссылка на первый элемент в очереди
    this.head = null;
    // ссылка на последний элемент в очереди
    this.tail = null;
    // количество элементов в очереди
    this.length = 0
  }

  getUnderlyingList() {
    // возвращаем всю очередь. Если бы надо было вернуть первый элемент - this.head.value
    return this.head;
  }

  enqueue(value) {
    if (this.length === 0) {
    // если очередь пустая, то создаем элемент с помощью класса ListNode, он же является первым и последним элементом очереди
      this.tail = new ListNode(value);
      this.head = this.tail
    } else {
    // вставляем созданный узел в конец череди
      this.tail.next = new ListNode(value);
    // обновляем значение this.tail. теперь оно равно только что добавленому элементу
      this.tail = this.tail.next;
    }
    this.length ++
  }

  dequeue() {
    // создаем переменную, хранящую ссылку на первый элемент очереди, его и будем удалять
    let current = this.head;
    // обновляем  значение this.head. теперь оно равно второму элементу, потому что первый удален
    this.head = this.head.next;
    this.length --

    // возвращаем удаленный элемент
    return current.value
  }
}

module.exports = {
  Queue
};

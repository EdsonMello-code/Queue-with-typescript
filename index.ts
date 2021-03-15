import Queue from "./Queue";

const queue = new Queue();

queue.enqueue('edson');
queue.enqueue('task');
queue.enqueue('random');
queue.enqueue('any value');
queue.enqueue('any value');
queue.dequeue()
console.log(queue.getSize())
console.log(queue.peek())

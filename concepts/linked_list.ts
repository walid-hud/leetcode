class Node<T> {
  data: T;
  next: Node<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Node<T> | null;
  constructor() {
    this.head = null;
  }
  addFirst(data: T) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }
  addLast(data: T) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  size(): number {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  addAt(idx: number, data: T) {
    if (idx < 0 || idx > this.size()) return;
    const new_node = new Node(data);
    if (idx === 0) {
      new_node.next = this.head;
      this.head = new_node;
      return;
    }
    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current!.next;
    }
    new_node.next = current!.next;
    current!.next = new_node;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next?.next) {
      current = current.next;
    }
    current.next = null;
    return;
  }

  removeAt(idx: number) {
    if (idx < 0 || idx > this.size()) return;
    if (idx === 0) {
      this.head = this.head!.next;
      return;
    }
    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current!.next;
    }
    if (current?.next) {
      current.next = current.next.next; //kill me already
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.info(current.data);
      current = current.next;
    }
  }
}

const numbers = new LinkedList<number>();
numbers.addFirst(0);
numbers.addFirst(1);
numbers.addLast(2);
numbers.addLast(3);

// tests
// console.assert(numbers.size()===4)
// get element by value

// function get_node_by_value<T>(value:T ,  head:Node<T>):Node<T>|null{
//   let current = head
//   while(current.next){
//     if(current.data === value){
//       return current
//     }
//     current = current.next!
//   }
//   return null
// }

// console.assert(get_node_by_value(0 , numbers.head!))
// console.assert(!get_node_by_value(4, numbers.head!))

// function getNthFromStart(idx:number){
//   let current = numbers.head
//   if(!current || idx<0) return null
//   for(let i = 0 ; i<idx ; i++){
//     if(current.next instanceof Node ){
//       current = current.next
//     }else{
//       return null
//     }
//   }
//   return current
// }

// console.assert(getNthFromStart(2))

function getNthFromEnd<T>(idx: number, list: LinkedList<T>) {
  let current = list.head;
  let listSize = list.size() 
  if (idx > listSize || !current || idx < 0) {
    return null;
  }
  
  for (let i = 0; i < listSize - idx  ; i++) {
    current = current!.next
  }
  return current
}

// console.assert(getNthFromEnd(1 , numbers)?.data===2)
// console.assert(getNthFromEnd(0 , numbers)?.data===3)
// console.log(getNthFromEnd(4 , numbers))
// console.log(getNthFromEnd(5 , numbers))
// console.log(getNthFromEnd(0 , numbers)?.data)


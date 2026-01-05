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
      return
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
    if(!this.head.next){
      this.head=null
      return
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

  print(){
    let current = this.head
    while(current){
      console.info(current.data)
      current = current.next
    }
  }
}



const numbers = new LinkedList<number>()
numbers.addFirst(0)
numbers.addFirst(2)
numbers.addLast(4)
numbers.removeAt(1)
numbers.print()
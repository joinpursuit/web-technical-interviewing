// Given this implementation of a singly linked lis, print out all the Node value.

## ANSWER


var Node = function(data) {
    this.data = data;
    this.next = null;
}

var linkedlist = new Node(1);
linkedlist.next = new Node(2);
linkedlist.next.next = new Node(3)
linkedlist.next.next.next = new Node(4)


function print(head) {
   var currentNode = head;

  while(currentNode){
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
}
print(linkedlist)
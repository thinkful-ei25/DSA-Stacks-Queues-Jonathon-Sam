'use strict';

class _Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(data){ 
    if(this.isEmpty()){
      this.top = new _Node(data);
      return;
    }
    const newNode = new _Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  isEmpty(){
    if(this.top === null){
      return true;
    }
    return false;
  }

  pop(){
    if(this.isEmpty()){
      console.log('stack is empty');
      return;
    }
    const currentNode = this.top;
    this.top = currentNode.next;
    return currentNode.data;
  }

  display(){
    let output = [];
    let currNode = this.top;
    while(currNode!== null){
      output.push(currNode.data);
      currNode = currNode.next;
    }
    return output;
  }

  peek(){
    return this.top;
  }

}

module.exports = Stack;
'use strict';
const Queue = require('./queue');


function peek(queue){
  return queue.first.value;
}

function display(queue){
  let currNode = queue.first;
  let output = [];
  while(currNode){
    output.push(currNode.value);
    currNode = currNode.prev;
  }
  return output;
}

function main(){
  const starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhara');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  
  console.log(peek(starTrekQ));
  console.log(display(starTrekQ));

  starTrekQ.dequeue();
  starTrekQ.dequeue();

  console.log(display(starTrekQ));

}
main();
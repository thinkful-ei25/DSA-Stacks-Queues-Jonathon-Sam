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

function squareDancing(maleQueue, femaleQueue){
  while(maleQueue.first && femaleQueue.first){
    console.log(maleQueue.dequeue() + ' with ' + femaleQueue.dequeue());
  }
  console.log('forever alone');
  while(maleQueue.first){
    console.log('M ' + maleQueue.dequeue());
  }
  while(femaleQueue.first){
    console.log(femaleQueue.dequeue());
  }
}

function enqueueDancers(maleQueue, femaleQueue){
  const array = ['F Jane', 'M Frank', 'M John', 'M Sherlock', 'F Madonna', 'M David', 'M Christopher', 'F Beyonce'];
  array.forEach(name => {
    if(name.charAt(0) === 'F'){
      femaleQueue.enqueue(name.slice(2));
    }
    else{
      maleQueue.enqueue(name.slice(2));
    }
  });
}

function main(){

  /*
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
*/
  let maleQueue = new Queue();
  let femaleQueue = new Queue();
  enqueueDancers(maleQueue, femaleQueue);
  squareDancing(maleQueue, femaleQueue);
}
main();
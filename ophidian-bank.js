'use strict';

const Queue = require('./queue');

function main(){
  const bankQ = new Queue();
  bankQ.enqueue('Customer A');
  bankQ.enqueue('Customer B');
  bankQ.enqueue('Customer C');
  bankQ.enqueue('Customer D');
  bankQ.enqueue('Customer E');
  bankQ.enqueue('Customer F');
  bankQ.enqueue('Customer G');
  bankQ.enqueue('Customer H');
  bankQ.enqueue('Customer I');
  bankQ.enqueue('Customer J');
  bankQ.enqueue('Customer K');
  bankQ.enqueue('Customer L');
  bankQ.enqueue('Customer M');
  bankQ.enqueue('Customer N');
  bankQ.enqueue('Customer O');
  while(bankQ.first){
    serveCustomer(bankQ);
  }

}

function paperworkCheck(){
  return (Math.random()<.25);
}

function serveCustomer(queue){
  console.log('Now serving '+queue.peek());
  if(paperworkCheck()){
    console.log('To the back of the line with you, '+queue.peek());
    queue.enqueue(queue.dequeue());

  } else {
    console.log(queue.dequeue() + ' knew how to do their paperwork and was served');
  }
}

main();
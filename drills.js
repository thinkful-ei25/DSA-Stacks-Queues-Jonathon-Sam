'use strict';
const Stack = require('./stack.js');

function peek(stack){
  return stack.top.data;
}

function display(stack){
  let currentNode = stack.top;
  let i = 0;
  let string = '';
  while(currentNode !== null){
    i === 0 ? string += `top -> ${currentNode.data}\n` : string += `\t\t\t ${currentNode.data}\n`;
    currentNode = currentNode.next;
    i++;
  }
  return string;
}

function firstChallenge(starTrek){
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log(peek(starTrek));
  console.log(display(starTrek));
  starTrek.pop();
  starTrek.pop();
  console.log(display(starTrek));
}

function checkPalindrome(starTrek){
  
}

function main(){
  const starTrek = new Stack();
  //firstChallenge(starTrek);

}



main();
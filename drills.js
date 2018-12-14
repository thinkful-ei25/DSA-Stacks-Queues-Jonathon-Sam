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

function is_palindrome(string){
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const stack = new Stack();
  for(let i=0; i<string.length;i++){
    stack.push(string[i]);
  }
  let reverseString = '';

  for(let i = string.length-1; i>=0; i--){
    reverseString += stack.pop();
  }
  if(reverseString === string){
    return true;
  } else {
    return false;
  }
}

function matchParentheses(string){
  const stack = new Stack();
  let output = new Stack();
  for(let i=0; i<string.length;i++){
    if(string[i]==='('){
      stack.push(string[i]+i);
    } else {
      if(stack.isEmpty()){
        output.push(') @ pos ' + i);
      } else {
        stack.pop();
      }
    }
  }
  let pos = 0;
  while(!stack.isEmpty()){
    let paren = stack.pop().slice(1);
    output.push('( @ pos '+paren);
    pos++;
  }
  console.log(output.display());
  if(output.isEmpty()){
    return true;
  } else {
    return false;
  }
}

// function isParenthesis(s){
//   return;
// }

const stack = randomNumberStack(5);
const stack2 = new Stack();


function doubleStackEnqueue(x){
  
  while(stack.top){
    stack2.push(stack.pop());
  }

  stack.push(x);

  while(stack2.top){
    stack.push(stack2.pop());
  }

}

function doubleStackDequeue(){

  if(stack.isEmpty()){
    console.log('Stack is empty');
    return;
  }

  let value = stack.peek();
  stack.pop();
  return value;
}

console.log(stack.display());
doubleStackEnqueue(69);
doubleStackDequeue();
console.log(stack.display());

function randomNumberStack(num){
  const stack = new Stack();
  for(let i=0;i<num;i++){
    stack.push(Math.floor(Math.random()*100+1));
  }
  return stack;
}

function sortStack(stack){
  let output = new Stack();
  while(!stack.isEmpty()){
    let value = stack.pop();
    while(!output.isEmpty() && peek(output) < value){
      stack.push(output.pop());
    }
    output.push(value);
  }
  return output.display();
}

function randomStack(){
  const stack = new Stack();
  for(let i = 0; i < 20; i++){
    stack.push(Math.floor(Math.random() * 100 + 1));
  }
  return stack;
}

function main(){
  /*
  firstChallenge(stack);
  console.log(is_palindrome('dad'));
  console.log(is_palindrome('A man, a plan, a canal: Panama'));
  console.log(is_palindrome('1001'));
  console.log(is_palindrome('Tauhida'));
  console.log(matchParentheses('(())'));
  console.log(matchParentheses('((((())'));
  console.log(matchParentheses('(()))'));
  const stack = randomStack();
  console.log(sortStack(stack));
  */
}



//main();
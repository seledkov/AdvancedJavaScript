// const addListenerBtn = document.getElementById('add-listener-btn');
// const clickableBtn = document.getElementById('clickable-btn');
// const messageInput = document.getElementById('click-message-input');

// function printMessage() {
//   const value = messageInput.value;
//   console.log(value || 'Clicked me!');
// }

// function addListener() {
//   clickableBtn.addEventListener('click', printMessage);
// }

// addListenerBtn.addEventListener('click', addListener);

//==== js engine heap and stack

// 1.register and save in heap
function getName() {
  // 7. prompt() => push in stack  // 8. stack use/call and pop/remove in stack after return value or ends all foo code
  return prompt('write your name', '');
}
// 2. register and save in heap
function greet() {
  // 6. getName() => push in stack // 9. stack use/call and pop/remove in stack after return value or ends all foo code
  const userName = getName();
  // 10. console.log() => push in stack
  console.log('hello ' + userName);
}
// 3. js see call // 5. greet() => push in stack
greet();

// 4. js call annonymous scripts (script file) => push in stack

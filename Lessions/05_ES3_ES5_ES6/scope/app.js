var name = 'Max';

if (name === 'Max') {
  // create as global variable
  // var hobbies = ['Sports', 'Cooking'];
  // create as block variable only into if scope
  let hobbies = ['Sports', 'Cooking'];
  console.log(hobbies);
}

function greet() {
  var age = 30;
  var name = 'Manuel';
  console.log(name, age);
  // console.log(name, age, hobbies);
}

{
  // create as block scope -  { } // if, for, foo, try/catch,  empty {}  xD
  let blockA = 4;
}

// console.log(blockA);

// console.log(name, hobbies);

greet();

// ==== var job ====
// for (var i = 0; i < 4; i++) {
//   setTimeout(() => {
//     console.log(i);
//   });
// }

for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i));
}

// for (var i = 0; i < 4; i++) {
//   console.log(i);
// }

// secondName hoisting and assign undefined
console.log(secondName);

var secondName = 'second';

var a;
// js engine clear next var and assign 5 to a
var a = 5;

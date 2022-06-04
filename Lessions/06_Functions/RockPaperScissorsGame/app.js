const startGameBtn = document.getElementById('start-game-btn');

const foo = function foo2() {
  console.log('foo', foo.name, new Error('err'));
  // console.log('foo', foo.name);
};

// console.log(foo.name); // foo2
// we can create name but it does not need and name returned after error
// foo2(); // err

const anonFoo = function () {
  console.log('anonFoo', anonFoo.name);
};

anonFoo(); // anonFoo

startGameBtn.addEventListener('click', foo);

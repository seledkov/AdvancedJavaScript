const arr1 = [1, 2, 3];

const arr2 = new Array(4); // empty arr witch length 4 [empty x4] // undefinded x4
arr2[2] = 4;
arr2.push(10);
const arr3 = Array.of(11); // [11]

const arr4 = Array.from('hi'); // ['h', 'i']

const hobbies = ['sport', 'cooking'];
hobbies.push('reading');
hobbies.unshift('coding');
hobbies.pop(); // remove last item in array and return him
hobbies.shift(); // shift all elements << and remove first item from arr and return him
hobbies.splice(0, 0, 'craft'); // arr.splice(startIndex, deleteAmount?, newsItems?)
hobbies.splice(0, 1); // remove 1 item start 0 index and return removed items
hobbies.splice(1); // delete all items after startIndex
hobbies.splice(-1, 0, 'Running'); // -1 start on last item

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numbersCopy = numbers.slice(); // returned all copy
// const numbersCopy = numbers.slice(2); // returned all copy start copy at 2 index
const numbersCopy = numbers.slice(2, 9); // returned copy interval arr at 2 index(include) to  9 (does not include) [3...9]
const updatedNumbers = numbers.concat(11, 12); // concat return result, not mutate basic arr

// numbers.indexOf(item, startIndex?) // return first finded index
// numbers.lastIndexOf(item, startIndex?) // return last finded index
numbers.includes(9, 3); // (findedItem, startIndex), return true/false if find
const people = [
  { name: 'max', age: 30 },
  { name: 'manu', age: 22 },
  { name: 'alex', age: 16 },
];

// return first cb true value from primitive and reference if obj
const manuel = people.find((person, index, persons) => {
  return person.name === 'manu';
});
// as find all
const adultPeople = people.filter((person, index, persons) => {
  return person?.age >= 18;
});

const alex = people.findIndex((person) => person.name === 'alex');

const names = ['alex', 'manu'];
const resultIncludesPeople = people.filter((item) => names.includes(item.name));

//Object.prototype.hasOwnProperty() // return true/false if has key (only self) ||(item in obj) return true/false if has self key or into prototype
const mutatedNumbers = numbers.forEach((item, index, items) => {
  return item + 10; // forEach does not returned value, if need returned value use map
});

const prices = [1, 32, 3, 12];
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1; // if 1 - swap elemnts if -1 not swap
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(prices, sortedPrices); // mutate old arr!!! and return new sorted arr
const sum = prices.reduce((accumulator, curr, index, prices) => {
  return accumulator + curr;
}, 0);

const testPhrase = 'My,name,is,max'.split(',').join(' ');

const notDeepCopyPeople = [...people]; // spread unzip items from iterable
const [firstPerson, ...otherPerson] = notDeepCopyPeople; // rest zip items

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
console.log(updatedNumbers, numbers);

// numbers.indexOf(item, startIndex?) // return first finded index
// numbers.lastIndexOf(item, startIndex?) // return last finded index

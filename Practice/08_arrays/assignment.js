// Create an array of numbers (of your choice) and perform three array
// operations on it: filter for numbers greater than 5, map every number to
// an object which holds the number on some property (e.g. "num") and
// reduce the array to a single number (the multiplication of all numbers).
const numbers = [4, 5, 6, 7, 8, 9, 10, 9, 6, 21, 19, 3, 80, 12];
const filteredNumbers = numbers.filter((num) => num > 5);
const mappedNumbers = filteredNumbers.map((number) => ({ num: number }));
const result = mappedNumbers.reduce((acc, item) => {
  return (acc *= item.num);
}, 1);
console.log(result);

// Write a function ("findMax") which executes some logic that finds the
// largest number in a list of arguments. Pass the array from task 1 split
// up into multiple arguments to that function.
const findMax = (numbers) => {
  // return (maxItem = Math.max(...numbers));
  return (maxItem = Math.max.apply(this, numbers));
};
console.log(findMax(numbers));

// Tweak the "findMax" function such that it finds both the minimum and
// maximum and returns those as an array. Then use destructuring when
// calling the function to store the two results in separate constants.
const findMinMax = (numbers) => {
  let minNum = numbers[0];
  let maxNum = numbers[0];
  numbers.forEach((num) => {
    if (num > maxNum) {
      maxNum = num;
    } else if (num < minNum) {
      minNum = num;
    }
  });
  return [minNum, maxNum];
};

const [mininalNum, maximumNum] = findMinMax(numbers);
console.log(mininalNum, maximumNum);

// Create a list (and possibly some surrounding logic) where you ensure
// that NO duplicate values can be added. Use whichever approach seems
// appropriate to you.
const list = new Set();
numbers.forEach((num) => list.add(num));
list.add(NaN);

const randomNumbers = [1, 2, 3, 4, 6, 7, 8, 12, 3, 4, 5];
list.add(NaN);

randomNumbers.forEach((num) => list.add(num));

console.log(list);

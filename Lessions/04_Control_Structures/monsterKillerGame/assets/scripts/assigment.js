const randomNumber = Math.random();
// 1. In the attached code assignment.js, you find a variable that holds a random number between 0 and 1.
//  Write code that shows an alert (with any message) when that number is greater than 0.7.

if (randomNumber > 0.7) {
  alert('random number > 0.7', randomNumber);
}

// 2. Create an array of numbers (any numbers of your choice)
//  and loop through the array in two different ways - outputting the numbers inside of the loop.

const numbersArray = [1, 3, 5, 7, 11, 13];
for (let i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i]);
}
for (const element of numbersArray) {
  console.log(element);
}

// 3. Adjust one of the loops from the last task such that
//  it actually starts at the end (last element) of the array and loops to the first element.

for (let i = numbersArray.length - 1; i >= 0; i--) {
  // numbersArray.reverse() bad idea
  console.log(numbersArray[i]);
}

// 4. Create another random number (in a separate constant)
//  and show an alert in two different scenarios: Both are greater 0.7 OR at least one of the two is NOT greater than 0.2.

const secondRandomNumber = Math.random();
const alertCondition =
  (secondRandomNumber > 0.7 && randomNumber > 0.7) ||
  secondRandomNumber < 0.2 ||
  randomNumber < 0.2;
if (alertCondition) {
  alert('hi');
}

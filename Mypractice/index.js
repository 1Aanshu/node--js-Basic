// Write a program to sum values of an array.

const arr = [23, 34, 77, 99, 324];
const sum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

//Write a program to remove a specific element from an array.

const arrayOfFruits = ["olive", "apricot", "cherry", "peach", "plum", "mango"];

const [, ...arrayOfCulinaryFruits] = arrayOfFruits;

console.log(arrayOfFruits);

console.log(arrayOfCulinaryFruits);

// Write a program to find the maximum and minimum value of an array

const arr1 = [1, 2, 3, 4, 5, 10, 7, 8, 9];

const minMax = async () => {
  const sortedArr = await arr1.sort((a, b) => a - b);
  const result = {
    minValue: sortedArr[0],
    maxValue: sortedArr[sortedArr.length - 1],
  };
  console.log(result);
};
minMax();

// Write a program to reverse an array of integer values

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reverseArr = () => {
  const arrReverse = arr2.reverse();
  console.log(arrReverse);
};
reverseArr();

const sum = (a, b) => a + b;

const mul = (a, b) => a * b;

const divide = (a, b) => a / b;

const sub = (a, b) => a - b;

module.exports = { sum, mul, divide, sub };

const foodA = ["Noodle", "Pasta", "Ice-cream"];
const foodB = ["Fries", "Ice-cream", "Pasta", "Pizza"];

const foodFinder = (foodA, foodB) =>
  foodA.filter((item) => foodB.includes(item));
result = foodFinder(foodA, foodB);
console.log({ result });

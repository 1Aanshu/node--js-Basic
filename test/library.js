const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const minMax = (arr) => {
  const minValue = Math.min(array);
  const maxValue = Math.max(array);
  console.log({ minValue, maxValue });
};

module.exports = { minMax };

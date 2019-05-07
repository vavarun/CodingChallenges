function highAndLow(numbers) {
  numbers = numbers.split(" ").map(el => parseInt(el));
  const array = numbers.reduce(
    (accumulator, currentValue) => {
      return [
        Math.max(currentValue, accumulator[0]),
        Math.min(currentValue, accumulator[1])
      ];
    },
    [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY]
  );
  return `${array[0]} ${array[1]}`;
}

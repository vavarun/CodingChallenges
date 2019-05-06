function iqTest(numbers) {
  numbers = numbers.split(" ").map(el => parseInt(el));

  const odd = numbers.filter(function(el) {
    return el % 2 === 1;
  });
  const even = numbers.filter(function(el) {
    return el % 2 === 0;
  });
  return odd.length < even.length
    ? numbers.indexOf(odd[0]) + 1
    : numbers.indexOf(even[0]) + 1;
}

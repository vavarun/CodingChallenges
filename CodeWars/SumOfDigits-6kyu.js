function digital_root(n) {
  let numString = n.toString();
  while (numString.length > 1) {
    numString = numString
      .split("")
      .map(Number)
      .reduce((a, b) => a + b)
      .toString();
  }
  return +numString;
}

function descendingOrder(n) {
  return parseFloat(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

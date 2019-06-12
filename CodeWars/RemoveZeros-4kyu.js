function removeZeros(array) {
  let holder;
  let arrLength = array.length;

  for (let i = 0; i < arrLength; i++) {
    if (array[i] === 0 || array[i] === "0") {
      holder = array[i];

      for (let j = i; j < array.length; j++) {
        if (j + 1 === array.length) {
          array[j] = holder;
        } else {
          array[j] = array[j + 1];
        }
      }
      i--;
      arrLength--;
    }
  }
  return array;
}

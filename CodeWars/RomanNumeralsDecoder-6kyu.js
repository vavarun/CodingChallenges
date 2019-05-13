function solution(roman) {
  let num = 0;
  const romanNums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  while (roman.length) {
    if (romanNums[roman[0]] < romanNums[roman[1]]) {
      num += romanNums[roman[1]] - romanNums[roman[0]];
      roman = roman.substring(2);
    } else {
      num += romanNums[roman[0]];
      roman = roman.substring(1);
    }
  }
  return num;
}

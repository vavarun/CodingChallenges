function solution(str) {
  arr = str.match(/(..?)/g);
  if (str.length % 2 !== 0) arr[arr.length - 1] += "_";
  return arr;
}

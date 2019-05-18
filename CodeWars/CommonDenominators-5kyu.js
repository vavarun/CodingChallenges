function convertFrac(lst) {
  if (!lst.length) return "";
  let str = "";
  let x = lst[0][1];
  let y;
  for (let i = 0; i < lst.length - 1; i++) {
    let s = x;
    let y = lst[i + 1][1];
    while (y) {
      let t = y;
      y = x % y;
      x = t;
    }
    x = (s * lst[i + 1][1]) / x;
  }
  lst.forEach(el => {
    const div = x / el[1];
    str += `(${el[0] * div},${x})`;
  });
  return str;
}

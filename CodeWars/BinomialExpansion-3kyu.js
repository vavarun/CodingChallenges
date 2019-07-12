function expand(expr) {
  const regexMatch = /^\((-?\d*)([a-z])([\+-]\d+)*\)\^(\d+)$/;
  const deconstruct = regexMatch.exec(expr);
  const [_, a, b, c, power] = deconstruct;

  const factorial = n => (n ? n * factorial(n - 1) : 1);
  const pascalsTriangle = k =>
    factorial(power) / (factorial(k) * factorial(power - k));

  if (power === "0") return "1";
  else {
    let str = "";

    for (let i = power; i >= 0; i--) {
      let num = 0;
      num += Math.pow(a === "-" ? -1 : a || 1, i);
      num *= Math.pow(c, power - i);
      num *= pascalsTriangle(i);
      if (num == 0) return str;
      else {
        if (i === power && num === -1) str += "-";
        if (i !== power && num >= 0) str += "+";
        if (i !== 0 && num !== 1 && num !== -1) str += num;
        if (i !== 0) str += `${b}${i == 1 ? "" : `^${i}`}`;
        if (i === 0) str += num;
      }
    }
    return str;
  }
}

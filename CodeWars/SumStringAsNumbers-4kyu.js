function sumStrings(a, b) {
  let sum = "";

  let aLength = a.length;
  let bLength = b.length;

  if (bLength > aLength) {
    let temp = b;
    b = a;
    a = temp;
  }

  let carry = 0;
  let aDigit;
  let bDigit;
  let temp;
  let digitSum;

  for (let i = 0; i < a.length; i++) {
    aDigit = parseInt(a.charAt(a.length - 1 - i));
    bDigit = parseInt(b.charAt(b.length - 1 - i));
    bDigit = bDigit ? bDigit : 0;
    temp = (carry + aDigit + bDigit).toString();
    digitSum = temp.charAt(temp.length - 1);
    carry = parseInt(temp.substr(0, temp.length - 1));
    carry = carry ? carry : 0;

    sum = i === a.length - 1 ? temp + sum : digitSum + sum;
  }

  return sum.replace(/^0+(?!\.|$)/, "");
}

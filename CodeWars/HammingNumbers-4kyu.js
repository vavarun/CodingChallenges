var hammings = [0, 1];
var _2 = [1, 2];
var _3 = [1, 3];
var _5 = [1, 5];

function min() {
  return Math.min(_2[_2.length - 1], _3[_3.length - 1], _5[_5.length - 1]);
}

function hamming(n) {
  if (hammings[n]) return hammings[n];

  var next = min();
  hammings[n] = next;
  if (_2[_2.length - 1] == next) _2.push(hammings[_2.length] * 2);
  if (_3[_3.length - 1] == next) _3.push(hammings[_3.length] * 3);
  if (_5[_5.length - 1] == next) _5.push(hammings[_5.length] * 5);

  return hammings[n];
}

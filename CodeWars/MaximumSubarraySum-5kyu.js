var maxSequence = function(arr) {
  if (arr.length === 0) return 0;

  let currentMax = 0;
  let max = 0;

  for (var i = 0; i < arr.length; i++) {
    currentMax = Math.max(0, currentMax + arr[i]);
    max = Math.max(currentMax, max);
  }
  return max;
};

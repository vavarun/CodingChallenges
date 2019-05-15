function longestConsec(strarr, k) {
  let longest = "";

  for (let i = 0; k > 0 && i <= strarr.length - k; i++) {
    const tempArray = strarr.slice(i, i + k);
    const tempStr = tempArray.join("");

    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}

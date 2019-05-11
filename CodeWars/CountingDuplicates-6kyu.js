function duplicateCount(text) {
  text = text.toLowerCase();
  let duplicates = 0;

  while (text.length) {
    const letter = text[0];

    if (text.match(new RegExp(letter, "g"), "").length > 1) duplicates++;
    text = text.replace(new RegExp(letter, "g"), "");
  }
  return duplicates;
}

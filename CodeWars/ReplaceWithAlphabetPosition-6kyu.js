function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(c => (c >= "a") & (c <= "z"))
    .map(c => c.charCodeAt(0) - "a".charCodeAt(0) + 1)
    .join(" ");
}

function whoIsNext(names, r) {
  while (Math.floor(r - 1) > names.length - 1) {
    r = (r - (names.length - 1)) / 2;
  }
  return names[Math.floor(r - 1)];
}

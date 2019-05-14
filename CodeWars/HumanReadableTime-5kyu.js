function humanReadable(seconds) {
  let h = 0;
  let m = 0;
  let s = 0;

  if (seconds >= 3600) {
    h = Math.floor(seconds / 3600);
    m = Math.floor((seconds - h * 3600) / 60);
    s = seconds - h * 3600 - m * 60;
  } else if (seconds >= 60) {
    m = Math.floor(seconds / 60);
    s = seconds - m * 60;
  } else s = seconds;

  const doubleDigit = num => {
    if (num < 9) {
      return "0" + num.toString();
    } else return num.toString();
  };

  return `${doubleDigit(h)}:${doubleDigit(m)}:${doubleDigit(s)}`;
}

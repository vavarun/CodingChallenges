function parseInt(string) {
  string = string.replace(/ and /g, " ");
  let num = 0;
  const ref = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000
  };

  if (string.includes("million")) {
    const millionString = string.split("million").shift();
    string = string
      .split("million")
      .pop()
      .replace(/\s/g, "");
    num += parseInt(millionString) * 1000000;
  }

  if (string.includes("thousand")) {
    const thousandString = string.split("thousand").shift();
    string = string
      .split("thousand")
      .pop()
      .replace(/\s/g, "");
    num += parseInt(thousandString) * 1000;
  }

  if (string.includes("hundred")) {
    const hundredString = string.split("hundred").shift();
    string = string
      .split("hundred")
      .pop()
      .replace(/\s/g, "");
    num += parseInt(hundredString) * 100;
  }

  if (string.includes("-")) {
    const tenString = string.split("-").shift();
    string = string
      .split("-")
      .pop()
      .replace(/\s/g, "");
    num += ref[tenString.replace(/\s/g, "")];
  }

  if (string) return (num += ref[string.replace(/\s/g, "")]);
  else return num;
}

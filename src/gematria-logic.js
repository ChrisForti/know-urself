function getGematriaValue(input) {
  let sum = 0;
  for (const letter of input) {
    sum += getPythagoreanValue2(letter);
    if (sum > 9) {
      const firstDigit = sum % 10;
      const secondDigit = parseInt(sum / 10);
      sum = firstDigit + secondDigit;
    }
  }
  return sum;
}

function getPythagoreanValue(letter) {
  const charCode = letter.charCodeAt(0) - 96;
  return charCode % 9 || 9;
}

function getPythagoreanValue2(letter) {
  return (letter.charCodeAt(0) - 96) % 9 || 9;
}
console.log(getGematriaValue("christopher forti"));
console.log(getGematriaValue("kenson johnson"));
console.log(" ".charCodeAt(0));

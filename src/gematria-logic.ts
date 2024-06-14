export function getGematriaValue(fullName: string) {
  // Sanitize the input to remove spaces and special characters and numbers
  const sanitizedFullName = fullName.toLowerCase().replace(/[^a-z]/g, "");
  let sum = 0;

  for (let i = 0; i < sanitizedFullName.length; i++) {
    sum += getPythagoreanValue(sanitizedFullName[i]);
  }

  while (sum > 9) {
    const leftHandDigit = Math.trunc(sum / 10);
    const rightHandDigit = sum % 10;
    sum = leftHandDigit + rightHandDigit;
    if (sum === 11 || sum === 22 || sum === 33) {
      break;
    }
  }

  return sum;
}

function getPythagoreanValue(letter: string) {
  return (letter.charCodeAt(0) - 96) % 9 || 9;
}

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");
console.log(resultEl);

const randomFunc = {
  upper: randomUpper,
  lower: randomLower,
  number: randomNumber,
  symbol: randomSymbol,
};

generateEl.addEventListener("click", () => {});

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function randomSymbol() {
  const symbol = "@#$%\"^&*~!-+=<>?{}[]|/||:;.,`'";
  return symbol[Math.floor(Math.random() * symbol.length)];
}

console.log(randomUpper(), randomLower(), randomNumber(), randomSymbol());

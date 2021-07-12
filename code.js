const form = document.querySelector("form");
const input = document.querySelector("#user-input");
console.log(input);

function getValueOfInput() {
  const detail = input.value;
  console.log(detail);
}

form.addEventListener("submit", (e) => {
  getValueOfInput();
  e.preventDefault();
});

input.addEventListener("type", getValueOfInput);

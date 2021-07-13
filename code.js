const form = document.querySelector("form");
const input = document.querySelector("#user-input");

const getValueOfInput = () => {
  if (input.value) {
    input.value = "";
  }
};

form.addEventListener("submit", (e) => {
  getValueOfInput();
  e.preventDefault();
});

// input.addEventListener("type", getValueOfInput);

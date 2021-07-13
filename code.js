const form = document.querySelector("form");
const input = document.querySelector("#user-input");
const ul = document.querySelector(".list");

const getValueOfInput = () => {
  if (input.value) {
    input.value = "";
  }
};

function createLi() {
  const newLi = document.createElement("li");
  const content = document.createTextNode(input.value);
  newLi.appendChild(content);
  ul.appendChild(newLi);
}

form.addEventListener("submit", (e) => {
  createLi();
  getValueOfInput();
  e.preventDefault();
});

input.addEventListener("type", getValueOfInput);

const form = document.querySelector("form");
const input = document.querySelector("#user-input");
const ul = document.querySelector(".list");
// const closeBtn = document.querySelector(".close");
// console.log(closeBtn);

const getValueOfInput = () => {
  if (input.value) {
    input.value = "";
  }
};

function createLi() {
  //create li
  const newLi = document.createElement("li");
  const content = document.createTextNode(input.value);
  newLi.appendChild(content);
  ul.appendChild(newLi);

  //create button and append to side of li
  const button = `<button class="close">X</button>`;
  newLi.innerHTML += button;
}

function localStorage() {}

form.addEventListener("submit", (e) => {
  createLi();
  getValueOfInput();
  e.preventDefault();
});

input.addEventListener("type", getValueOfInput);

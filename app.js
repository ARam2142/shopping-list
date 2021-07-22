const form = document.querySelector("form");
const input = document.querySelector("#user-input");
const ul = document.querySelector(".list");
const deleteBtn = document.querySelector("delete");
console.log(deleteBtn);

const getValueOfInput = () => {
  if (input.value) {
    input.value = "";
  }
};

function renderLi() {
  //create li
  const li = document.createElement("li");
  li.setAttribute("class", "bar");
  const content = document.createTextNode(input.value);
  li.appendChild(content);
  ul.appendChild(li);

  //create button and append to side of li
  const button = document.createElement("button");
  button.setAttribute("class", "delete");
  button.setAttribute("type", "button");
  button.setAttribute("id", setId());
  button.textContent = "X";
  li.appendChild(button);
}

function setId() {
  return Math.floor(Math.random() * 1000);
}

form.addEventListener("submit", (e) => {
  renderLi();
  getValueOfInput();
  e.preventDefault();
});

input.addEventListener("type", getValueOfInput);

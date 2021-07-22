const form = document.querySelector("form");
const input = document.querySelector("#user-input");
const ul = document.querySelector(".list");

const getValueOfInput = () => {
  if (input.value) {
    input.value = "";
  }
};

function setId() {
  return Math.floor(Math.random() * 100000);
}

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

  const deleteBtn = Array.from(document.querySelectorAll(".delete"));
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const elVal = e.target.id;
      const filterArr = deleteBtn.filter((item) => {
        if (item.id === elVal) {
          li.remove();
          button.remove();
        }
      });
    });
  });
}

form.addEventListener("submit", (e) => {
  renderLi();
  getValueOfInput();
  e.preventDefault();
});

input.addEventListener("type", getValueOfInput);

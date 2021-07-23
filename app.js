const form = document.querySelector("form");
const input = document.querySelector("#user-input");
const ul = document.querySelector(".list");
let groceries = [];

let groceryName = input.value;

function retrieveItem() {
  let storeItems = JSON.parse(localStorage.getItem("grocery-list"));
  if (storeItems === null) {
    groceries = [];
  } else {
    groceries.push(groceryName);
  }
}

function saveItem() {
  retrieveItem();
  let saveItems = localStorage.setItem(
    "grocery-list",
    JSON.stringify(groceries)
  );
}

function loadData() {
  let storeItems = JSON.parse(localStorage.getItem("grocery-list"));
  if (storeItems === null) {
    groceries = [];
  } else {
    groceries.push(groceryName);
  }
}

const getValueOfInput = () => {
  if (input.value) {
    input.value = "";
  }
};

function setId() {
  return Math.floor(Math.random() * 100000);
}

//displays li on screen
const renderLi = () => {
  //create li
  // getValueOfInput();
  const li = document.createElement("li");
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
      const btnId = e.target.id;
      const filterArr = deleteBtn.filter((item) => {
        if (item.id === btnId) {
          li.remove();
        }
      });
      return filterArr;
    });
  });
};

form.addEventListener("submit", (e) => {
  saveItem();
  renderLi();
  // loadData();
  getValueOfInput();
  e.preventDefault();
});

// input.addEventListener("type", getValueOfInput);

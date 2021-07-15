const form = document.querySelector("form");
const input = document.querySelector("#user-input");
const ul = document.querySelector(".list");
let groceries;
let foodItems = JSON.parse(localStorage.getItem("foodItem"));

function saveItems() {
  if (foodItems === null) {
    groceries = [];
  } else {
    groceries = foodItems;
  }
  groceries.push(input.value);
}

function storeItems() {
  saveItems();
  localStorage.setItem("foodItem", JSON.stringify(groceries));
}

// function loadItems() {
//   let output = "";
//   if (foodItems === null) {
//     groceries = [];
//   } else {
//     groceries = foodItems;
//   }
// }

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

form.addEventListener("submit", (e) => {
  createLi();
  storeItems();
  //saveItems();
  //loadItems();
  getValueOfInput();
  e.preventDefault();
});

input.addEventListener("type", getValueOfInput);

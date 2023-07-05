const button = document.querySelector(".box button");
const data = document.querySelector(".box .data");

// button click
const foods = [];

const showFood = () => {
  let content = "";
  foods.reverse().map((item, index) => {
    content += `<h2>${index + 1}. ${item}</h2>`;
  });
  data.innerHTML = content;
};

button.onclick = () => {
  const foodName = button.previousElementSibling.value;
  foods.push(foodName);
  showFood();
  button.previousElementSibling.value = "";
};

showFood();

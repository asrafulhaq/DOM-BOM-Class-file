const input = document.querySelector(".actions input.fs");
const color = document.querySelector(".actions input.color");
const span = document.querySelector(".actions span");
const h1 = document.querySelector(".actions h1");

input.oninput = (e) => {
  const val = e.target.value;
  span.innerHTML = val;
  h1.style.fontSize = `${val}px`;
};

color.oninput = (e) => {
  const val = e.target.value;
  h1.style.color = `${val}`;
};

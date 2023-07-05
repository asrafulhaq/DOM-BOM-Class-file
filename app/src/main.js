const button = document.querySelector(".box button");

// button click
button.addEventListener("click", () => {
  button.previousElementSibling.previousElementSibling.classList.toggle(
    "jakanaka"
  );
});

button.addEventListener("dblclick", () => {
  button.previousElementSibling.classList.toggle("nakajaka");
});

button.addEventListener("mousedown", () => {
  button.parentElement.parentElement.style.backgroundColor = "tomato";
});

button.addEventListener("mouseup", () => {
  button.parentElement.parentElement.style.backgroundColor = "#FFF";
});

const root = document.getElementById("root");

// create elemet
const ul = document.createElement("ul");

let content = "";
todos.forEach((item, index) => {
  content += `<li>${item}</li>`;
});

ul.innerHTML = content;

root.append(ul);

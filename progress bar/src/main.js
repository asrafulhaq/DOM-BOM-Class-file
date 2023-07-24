const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const bar = document.querySelector(".progress-bar .bar");

let count;

button.onclick = () => {
  const value = input.value;
  bar.style.width = `100%`;
  h1.innerHTML = value;
  count = value;

  let int = setInterval(() => {
    count--;
    h1.innerHTML = count;

    bar.style.width = `${(100 * count) / value}%`;

    if (count <= 0) {
      clearInterval(int);
    }
  }, 1000);
};

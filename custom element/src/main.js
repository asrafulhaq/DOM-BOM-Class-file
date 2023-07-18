const btn1 = document.querySelector(".box .start");
const btn2 = document.querySelector(".box .stop");
const btn3 = document.querySelector(".box .reset");
const h1 = document.querySelector(".box h1");

let count = 0;
let counter;

btn1.onclick = () => {
  h1.innerHTML = count;

  counter = setInterval(() => {
    count++;
    h1.innerHTML = count;
  }, 1000);
};

btn2.onclick = () => {
  clearInterval(counter);
};

btn3.onclick = () => {
  clearInterval(counter);
  count = 0;
  h1.innerHTML = count;
};

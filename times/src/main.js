const form = document.getElementById("result-form");
const msg = document.querySelector(".msg");
const loader = document.querySelector("img");
const joy = document.getElementById("joy");
const cl = document.getElementById("click");

form.onsubmit = (e) => {
  e.preventDefault();
  cl.play();
  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data.entries());

  loader.style.display = "block";

  setTimeout(function () {
    loader.style.display = "none";

    if (!data.sub || !data.mark) {
      msg.innerHTML = createAlert("All fields are required");
    } else {
      const result = getResult(data.mark);

      if (result.grade === "F") {
      } else {
        joy.play();
      }

      msg.innerHTML = createAlert(
        `Subject : ${data.sub} / GPA : ${result.gpa} / Grade : ${result.grade}`,
        "info"
      );
    }

    e.target.reset();
  }, 3000);
};

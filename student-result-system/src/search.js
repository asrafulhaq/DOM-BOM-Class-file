const search_result_form = document.getElementById("search_result_form");
const sheet = document.querySelector(".student-result-sheet");

search_result_form.onsubmit = (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data.entries());

  let oldData = getDataLS("students");

  const studentResult = oldData.find(
    (item) => item.roll === data.roll && item.reg === data.reg
  );

  let content;

  if (studentResult) {
    content = `
    <div class="student-info">
    <img
      style="width: 150px; height: 150px"
      class="shadow"
      src="${studentResult.photo}"
      alt=""
    />
    <h3>${studentResult.name}</h3>
    <p>Roll : ${studentResult.roll} | Reg: ${studentResult.reg}</p>
    ${
      getFinalResult({
        bangla: studentResult.result.bangla,
        english: studentResult.result.english,
        math: studentResult.result.math,
        science: studentResult.result.science,
        social_science: studentResult.result.social_science,
        religion: studentResult.result.religion,
      }).result === "F"
        ? '<h2 style="color:red;">Failed</h2>'
        : '<h2 style="color:green;">Passed</h2>'
    }

    <hr />
    <table class="table table-bordered">
      <tr>
        <td>Subject</td>
        <td>Marks</td>
        <td>GPA</td>
        <td>Grade</td>
        <td>CGPA</td>
        <td>Final Result</td>
      </tr>
      <tr>
        <td>Bangla</td>
        <td>${studentResult.result.bangla}</td>
        <td>${getGpaGrade(studentResult.result.bangla).gpa}</td>
        <td>${getGpaGrade(studentResult.result.bangla).grade}</td>
        <td rowspan="6">${getFinalResult({
          bangla: studentResult.result.bangla,
          english: studentResult.result.english,
          math: studentResult.result.math,
          science: studentResult.result.science,
          social_science: studentResult.result.social_science,
          religion: studentResult.result.religion,
        }).cgpa.toFixed(2)}</td>
        <td rowspan="6">${
          getFinalResult({
            bangla: studentResult.result.bangla,
            english: studentResult.result.english,
            math: studentResult.result.math,
            science: studentResult.result.science,
            social_science: studentResult.result.social_science,
            religion: studentResult.result.religion,
          }).result
        }</td>
      </tr>
      <tr>
        <td>English</td>
        <td>${studentResult.result.english}</td>
        <td>${getGpaGrade(studentResult.result.english).gpa}</td>
        <td>${getGpaGrade(studentResult.result.english).grade}</td>
      </tr>
      <tr>
        <td>Math</td>
        <td>${studentResult.result.math}</td>
        <td>${getGpaGrade(studentResult.result.math).gpa}</td>
        <td>${getGpaGrade(studentResult.result.math).grade}</td>
      </tr>
      <tr>
        <td>Science</td>
        <td>${studentResult.result.science}</td>
        <td>${getGpaGrade(studentResult.result.science).gpa}</td>
        <td>${getGpaGrade(studentResult.result.science).grade}</td>
      </tr>
      <tr>
        <td>Social Science</td>
        <td>${studentResult.result.social_science}</td>
        <td>${getGpaGrade(studentResult.result.social_science).gpa}</td>
        <td>${getGpaGrade(studentResult.result.social_science).grade}</td>
      </tr>
      <tr>
        <td>Religion</td>
        <td>${studentResult.result.religion}</td>
        <td>${getGpaGrade(studentResult.result.religion).gpa}</td>
        <td>${getGpaGrade(studentResult.result.religion).grade}</td>
      </tr>
    </table>
  </div>
    `;
  } else {
    content = "Result not found";
  }

  sheet.innerHTML = content;
};

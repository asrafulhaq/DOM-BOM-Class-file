const student_create_form = document.getElementById("student_create_form");
const msg = document.querySelector(".msg");
const studentsList = document.querySelector(".all-students-data");
const singleStudent = document.querySelector(".single-data");

//show all students
const getStudents = () => {
  const students = getDataLS("students");

  console.log(students);

  let content = "";

  if (students.length > 0) {
    students.map((student, index) => {
      content += `<tr class="align-middle">
      <td>${index + 1}</td>
      <td>
        <img
          style="
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 50%;
          "
          src="${student.photo}"
          alt="${student.name}"
        />
      </td>
      <td>${student.name}</td>
      <td>${student.roll}</td>
      <td>${student.reg}</td>
      <td>${timeAgo(student.createdAt)}</td>
      <td>
        <button class="btn btn-sm btn-success">Add result</button>
      </td>
      <td>
        <button class="btn btn-sm btn-info" data-bs-toggle="modal" data-bs-target="#show_single_student_modal" onclick="showSingleStudent('${
          student.roll
        }')">
          <i class="fa-solid fa-eye"></i>
        </button>
        <button class="btn btn-sm btn-warning">
          <i class="fa-solid fa-edit"></i>
        </button>
        <button class="btn btn-sm btn-danger" onclick="deleteStudent('${
          student.roll
        }')" >
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>`;
    });
  } else {
    content = `<tr>
      <td colspan="8" class="text-center"> No data found </td>
    </tr>`;
  }

  studentsList.innerHTML = content;
};
getStudents();

const showSingleStudent = (roll) => {
  const allStudent = getDataLS("students");
  const single = allStudent.find((data) => data.roll == roll);

  singleStudent.innerHTML = `<img
                              style="width: 300px"
                              src="${single.photo}"
                              alt=""
                            />
                            <h2>${single.name}</h2>
                            <p>Roll : ${single.roll} | Req : ${single.reg}</p>`;
};

// delete student
const deleteStudent = (roll) => {
  const conf = confirm("Are you sure");

  if (conf) {
    const oldStudent = getDataLS("students");
    const updatedData = oldStudent.filter((data) => data.roll !== roll);
    sendDataLS("students", updatedData);
    getStudents();
  } else {
    alert("your data safe");
  }
};

// submit student create form
student_create_form.onsubmit = (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data.entries());

  // validation
  if (!data.name || !data.roll || !data.reg) {
    msg.innerHTML = createAlert("All fields are required");
  } else if (!isNumber(data.roll)) {
    msg.innerHTML = createAlert("Invalid roll number");
  } else if (!isNumber(data.reg)) {
    msg.innerHTML = createAlert("Invalid Reg number");
  } else {
    const oldStudents = getDataLS("students");
    oldStudents.push({
      ...data,
      result: null,
      createdAt: Date.now(),
    });
    sendDataLS("students", oldStudents);
    e.target.reset();
    msg.innerHTML = createAlert(
      `<strong>${data.name}</strong> created successful`,
      "success"
    );
    getStudents();
  }
};

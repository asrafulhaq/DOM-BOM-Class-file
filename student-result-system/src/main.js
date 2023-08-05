const student_create_form = document.getElementById("student_create_form");
const msg = document.querySelector(".msg");
const msgEdit = document.querySelector(".msg-edit");
const studentsList = document.querySelector(".all-students-data");
const singleStudent = document.querySelector(".single-data");
const student_edit_form = document.getElementById("student_edit_form");
const student_result_form = document.getElementById("student_result_form");
const student_edit_result_form = document.getElementById(
  "student_edit_result_form"
);
//show all students
const getStudents = () => {
  const students = getDataLS("students");

  console.log(students);

  let content = "";

  if (students.length > 0) {
    students.reverse().map((student, index) => {
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
        ${
          student.result === null
            ? `<button class="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#student_result_modal" onclick="addResult('${student.id}')">Add Marks</button>`
            : `<button class="btn btn-sm btn-warning" data-bs-toggle="modal" data-bs-target="#student_edit_result_modal" onclick="editResult('${student.id}')">View Marks</button>`
        } 
       
      </td>
      <td>
        <button class="btn btn-sm btn-info" data-bs-toggle="modal" data-bs-target="#show_single_student_modal" onclick="showSingleStudent('${
          student.roll
        }')">
          <i class="fa-solid fa-eye"></i>
        </button>
        <button class="btn btn-sm btn-warning" data-bs-toggle="modal" data-bs-target="#edit_student_modal" onclick="editStudentData('${
          student.id
        }')">
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

// add result
const addResult = (id) => {
  student_result_form.querySelector('input[name="id"]').value = id;
};

// edit result
const editResult = (id) => {
  const data = getDataLS("students");
  const editResultData = data.find((item) => item.id === id);

  student_edit_result_form.querySelector('input[placeholder="Bangla"]').value =
    editResultData.result.bangla;

  student_edit_result_form.querySelector('input[placeholder="English"]').value =
    editResultData.result.english;

  student_edit_result_form.querySelector('input[placeholder="Math"]').value =
    editResultData.result.math;

  student_edit_result_form.querySelector('input[placeholder="Science"]').value =
    editResultData.result.science;

  student_edit_result_form.querySelector(
    'input[placeholder="Social Science"]'
  ).value = editResultData.result.social_science;

  student_edit_result_form.querySelector(
    'input[placeholder="Religion"]'
  ).value = editResultData.result.religion;

  student_edit_result_form.querySelector('input[placeholder="id"]').value = id;
};

// edit result form submit
student_edit_result_form.onsubmit = (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data.entries());

  let oldData = getDataLS("students");

  oldData[oldData.findIndex((item) => item.id === data.id)] = {
    ...oldData[oldData.findIndex((item) => item.id === data.id)],
    result: data,
  };

  sendDataLS("students", oldData);
  getStudents();
  e.target.reset();
};

// student_result_form submit
student_result_form.onsubmit = (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data.entries());

  // update result
  const oldData = getDataLS("students");

  oldData[oldData.findIndex((item) => item.id === data.id)] = {
    ...oldData[oldData.findIndex((item) => item.id === data.id)],
    result: data,
  };

  sendDataLS("students", oldData);

  getStudents();
  e.target.reset();
};

// edit student data
const editStudentData = (id) => {
  const oldData = getDataLS("students");
  const data = oldData.find((data) => data.id === id);

  student_edit_form.querySelector('input[name="name"]').value = data.name;
  student_edit_form.querySelector('input[name="roll"]').value = data.roll;
  student_edit_form.querySelector('input[name="reg"]').value = data.reg;
  student_edit_form.querySelector('input[name="id"]').value = data.id;
  student_edit_form.querySelector('input[name="photo"]').value = data.photo;
  student_edit_form
    .querySelector("img#prevPho")
    .setAttribute("src", data.photo);
};

// edit form submit
student_edit_form.onsubmit = (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data.entries());

  const getOldData = getDataLS("students");

  // check roll number
  if (getOldData.some((item) => item.roll === data.roll)) {
    msgEdit.innerHTML = createAlert("Roll already exists");
    return;
  }

  // check reg number
  if (getOldData.some((item) => item.reg === data.reg)) {
    msgEdit.innerHTML = createAlert("Reg already exists");
    return;
  }

  getOldData[getOldData.findIndex((item) => item.id === data.id)] = {
    ...getOldData[getOldData.findIndex((item) => item.id === data.id)],
    ...data,
  };

  sendDataLS("students", getOldData);

  getStudents();
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

    // check roll number
    if (oldStudents.some((item) => item.roll === data.roll)) {
      msg.innerHTML = createAlert("Roll already exists");
      return;
    }

    // check reg number
    if (oldStudents.some((item) => item.reg === data.reg)) {
      msg.innerHTML = createAlert("Reg already exists");
      return;
    }

    oldStudents.push({
      ...data,
      result: null,
      createdAt: Date.now(),
      id: getRandomUniqueID(26),
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

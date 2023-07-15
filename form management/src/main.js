const userForm = document.getElementById("userForm");
const userPhoto = document.getElementById("userPhoto");
const UserPhotoPreview = document.getElementById("UserPhotoPreview");
const msg = document.querySelector(".msg");

// user form submit
userForm.onsubmit = (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data);

  // validation
  if (!data.name.trim() || !data.email.trim() || !data.mobile.trim()) {
    msg.innerHTML = createAlert("all fields are required");
  } else if (!isEmail(data.email)) {
    msg.innerHTML = createAlert("Invalid Email address", "warning");
  } else if (!isMobile(data.mobile)) {
    msg.innerHTML = createAlert("Invalid Mobile Number", "info");
  } else {
    msg.innerHTML = createAlert("Data stable", "success");
  }
};

// user photo preview
userPhoto.onchange = (e) => {
  const imageUrl = URL.createObjectURL(e.target.files[0]);
  UserPhotoPreview.setAttribute("src", imageUrl);
};

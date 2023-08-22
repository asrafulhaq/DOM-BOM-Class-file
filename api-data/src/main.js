const user_list = document.querySelector(".users-list");
const singleUserModal = document.querySelector(".singleUserModal");

// get all github user api
const getUsers = async () => {
  await fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((res) => {
      let content = "";
      res.map((item, index) => {
        content += `
        <div class="col-md-3 my-3">
            <div class="card">
            <img src="${item.avatar_url}" alt="" />
            <div class="card-body">
                <h3>${item.login}</h3>
                <button onclick="getSingleUser('${item.id}')" class="btn btn-sm btn-info" data-bs-toggle="modal" data-bs-target="#single_user">view</button>
            </div>
            </div>
        </div>
        `;
      });

      user_list.innerHTML = content;
    })
    .catch((error) => {
      console.log(error);
    });
};
getUsers();

// get single user
const getSingleUser = async (id) => {
  await fetch(`https://api.github.com/users/${id}`)
    .then((res) => res.json())
    .then((res) => {

      

      singleUserModal.innerHTML = `<div class="row">
      <div class="col-md-6">
        <img
          class="w-100"
          src="${res.avatar_url}"
          alt=""
        />
      </div>
      <div class="col-md-6 p-5">
        <h1>${res.name}</h1>
        <p>${res.location}</p>
      </div>
    </div>`;
    })
    .catch((error) => {
      console.log(error);
    });
};

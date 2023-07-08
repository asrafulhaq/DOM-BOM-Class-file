const createTodoButton = document.querySelector(".todo .add-new-todo button");
const createTodoInput = document.querySelector(".todo .add-new-todo input");
const todoList = document.querySelector(".todo ul");

//  show todos data
const showTodos = () => {
  const todos = getData("todos");

  let content = "";

  todos.forEach((item, index) => {
    content += `<li>
                  <p><i class="fa fa-check"></i> ${item}</p>
                  <button onclick="deleteTodo('${item}')"><i class="fa fa-trash"></i></button>
                </li>`;
  });

  todoList.innerHTML = content;
};

showTodos();

// create new todo
createTodoButton.onclick = () => {
  const todo = createTodoInput.value;

  // add validation
  if (todo) {
    insertData("todos", todo);
    createTodoInput.value = "";
  } else {
    alert("Todo must not be empty");
  }

  showTodos();
};

// delete todos
const deleteTodo = (item) => {
  const todos = getData("todos");
  const updateTodos = todos.filter((data) => data != item);

  updateData("todos", updateTodos);

  showTodos();
};

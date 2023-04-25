interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.querySelector("#btn")! as HTMLButtonElement;
const todoInput = document.querySelector("#todoinput")! as HTMLInputElement;
// Another way to select only works if one element in the page
const form = document.querySelector("form")!;
const todoList = document.querySelector("ul")!;

const todos: Todo[] = readTodo();

function readTodo(): Todo[] {
  const jsonTodo = window.localStorage.getItem("todos");
  if (jsonTodo === null) return [];
  return JSON.parse(jsonTodo);
}
todos.forEach(createTodo);

function saveTodo(): void {
  window.localStorage.setItem("todos", JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent): void {
  e.preventDefault();
  const newTodo: Todo = {
    text: todoInput.value,
    completed: false,
  };
  todos.push(newTodo);
  createTodo(newTodo);
  saveTodo();
  todoInput.value = "";
}

function createTodo(todo: Todo): void {
  const newLI = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;

  checkbox.addEventListener("change", function () {
    todo.completed = !todo.completed;
    saveTodo();
  });

  newLI.append(todo.text);
  newLI.append(checkbox);
  todoList.append(newLI);
}

form.addEventListener("submit", handleSubmit);

// btn?.addEventListener("click", function () {
//   alert(todoInput.value);
//   todoInput.value = "";
// });

const update_todo_form = document.getElementById("update_todo_form");

update_todo_form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const todo_id = update_todo_form.dataset.id;
  const title = document.getElementById("title").value;

  const responce = await fetch(`/todo/${todo_id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  window.location.href = "/";
});

const delete_todo_form = document.getElementById("delete_todo_form");

delete_todo_form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const todo_id = delete_todo_form.dataset.id;

  const responce = await fetch(`/todo/${todo_id}`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
  });
  window.location.href = "/";
});

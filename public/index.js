const create_todo_form = document.getElementById("create_todo_form");

create_todo_form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const user_id = create_todo_form.elements["user_id"].value;
  const title = create_todo_form.elements["title"].value;

  await fetch("/todo", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_id, title }),
  });
  window.location.href = "/";
});

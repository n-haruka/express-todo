const pool = require("../db/db_config");

exports.fetch_all_todos = () => {
  const query = "SELECT * FROM todo.todos";
  return pool.query(query);
};

exports.delete_selected_todo = (todo_id) => {
  const query = "DELETE FROM todo.todos WHERE id = $1";
  return pool.query(query, [todo_id]);
};

exports.fetch_selected_todo = (todo_id) => {
  const query = "SELECT * FROM todo.todos WHERE id = $1";
  return pool.query(query, [todo_id]);
};

exports.update_selected_todo = (todo_id, title) => {
  const query = "UPDATE todo.todos SET title = $2 WHERE id = $1";
  return pool.query(query, [todo_id, title]);
};

exports.create_todo = (user_id, title) => {
  const query = "INSERT INTO todo.todos (user_id, title) VALUES ($1, $2)";
  return pool.query(query, [user_id, title]);
};

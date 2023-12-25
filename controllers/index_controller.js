const user_model = require("../models/user_model.js");
const todo_model = require("../models/todo_model.js");

exports.get_index = async (req, res) => {
  try {
    const users = await user_model.fetch_all_users();
    const todos = await todo_model.fetch_all_todos();
    res.render("pages/index", { todos: todos.rows, users: users.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

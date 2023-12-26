const todo_model = require("../models/todo_model.js");

exports.get_todo = async (req, res) => {
  try {
    const result = await todo_model.fetch_selected_todo(req.params.id);
    res.status(200).render("pages/detail", { selected_todo: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create_todo = async (req, res) => {
  try {
    const { user_id, title } = req.body;
    await todo_model.create_todo(user_id, title);
    res.status(200).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update_todo = async (req, res) => {
  try {
    const { title } = req.body;
    const selected_todo = await todo_model.fetch_selected_todo(req.params.id);
    if (selected_todo.rows[0].title === title) {
      res.status(200).json();
      return;
    }
    await todo_model.update_selected_todo(req.params.id, title);
    res.status(200).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.delete_todo = async (req, res) => {
  try {
    await todo_model.delete_selected_todo(req.params.id);
    res.status(200).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

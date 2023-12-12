const express = require("express");
const morgan = require("morgan");
const listEndpoints = require("express-list-endpoints");
const dotenv = require("dotenv");
const user_model = require("./models/user_model.js");
const todo_model = require("./models/todo_model.js");

// Load Environment Variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// ビューエンジンを設定します。
app.set("view engine", "ejs");

// morgan ミドルウェアを設定します。'dev' はログのフォーマットです。
app.use(morgan("dev"));

// クライアントから送信されたデータをreq.body経由で取得します。
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// エンドポイント一覧を返すルート
app.get("/endpoint", (req, res) => {
  const endpoints = listEndpoints(app);
  res.json(endpoints);
});

app.get("/", async (req, res) => {
  try {
    const users = await user_model.fetch_all_users();
    const todos = await todo_model.fetch_all_todos();
    res.render("pages/index", { todos: todos.rows, users: users.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/todo_detail/:id", async (req, res) => {
  try {
    const result = await todo_model.fetch_selected_todo(req.params.id);
    res.status(200).render("pages/detail", { selected_todo: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/delete_todo/:id", async (req, res) => {
  try {
    await todo_model.delete_selected_todo(req.params.id);
    res.status(200).redirect("/");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/update_todo/:id", async (req, res) => {
  try {
    const { title } = req.body;
    const selected_todo = await todo_model.fetch_selected_todo(req.params.id);
    if (selected_todo.rows[0].title === title) {
      res.status(200).redirect("/");
      return;
    }
    await todo_model.update_selected_todo(req.params.id, title);
    res.status(200).redirect("/");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/create_todo", async (req, res) => {
  try {
    const { user_id, title } = req.body;
    await todo_model.create_todo(user_id, title);
    res.status(200).redirect("/");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

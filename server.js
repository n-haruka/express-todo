const { Pool } = require("pg");
const express = require("express");
const morgan = require("morgan");
const listEndpoints = require("express-list-endpoints");
const dotenv = require("dotenv");

// Load Environment Variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const pool = new Pool({
  user: process.env.DEVELOPE_DB_USER, // Your database user
  host: process.env.DEVELOPE_DB_HOST, // Your database host
  database: process.env.DEVELOPE_DB_NAME, // Your database name
  password: process.env.DEVELOPE_DB_PASSWORD, // Your database password
  port: process.env.DEVELOPE_DB_PORT, // Your database port
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      return console.error("Error executing query", err.stack);
    }
    console.log(result.rows);
  });
});

// ビューエンジンを設定します。
app.set("view engine", "ejs");

// morgan ミドルウェアを設定します。'dev' はログのフォーマットです。
app.use(morgan("dev"));

// その他のルート定義をここに追加
app.get("/some-route", (req, res) => {
  res.send("Some other route");
});

// エンドポイント一覧を返すルート
app.get("/endpoint", (req, res) => {
  const endpoints = listEndpoints(app);
  res.json(endpoints);
});

// "/" のときindexページを表示
app.get("/", function (req, res) {
  res.render("pages/index");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

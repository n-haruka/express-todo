const express = require("express");
const morgan = require("morgan");
const listEndpoints = require("express-list-endpoints");
const dotenv = require("dotenv");

// Load Environment Variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

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

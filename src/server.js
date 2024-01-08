const express = require("express");
const morgan = require("morgan");
const listEndpoints = require("express-list-endpoints");
const dotenv = require("dotenv");
const todo_routes = require("./routes/todo_routes");

// Load Environment Variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// ビューエンジンを設定します。
app.set("view engine", "ejs");

// viewsディレクトリを指定
app.set("views", "src/views");

// morgan ミドルウェアを設定します。'dev' はログのフォーマットです。
app.use(morgan("dev"));

// クライアントから送信されたデータをreq.body経由で取得します。
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// publicディレクトリ内のファイルを静的ファイルとして提供
app.use(express.static("public"));

// ルーティングファイルを使用
app.use(todo_routes);

// エンドポイント一覧を返すルート
app.get("/endpoint", (req, res) => {
  const endpoints = listEndpoints(app);
  res.json(endpoints);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const { Pool } = require("pg");
const express = require("express");
const listEndpoints = require("express-list-endpoints");
const app = express();
const port = 3000;

const pool = new Pool({
  user: "dev_user", // Your database user
  host: "localhost", // Your database host
  database: "development_db", // Your database name
  password: "dev_password", // Your database password
  port: 5432, // Your database port
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

// その他のルート定義をここに追加
app.get("/some-route", (req, res) => {
  res.send("Some other route");
});

// エンドポイント一覧を返すルート
app.get("/endpoint", (req, res) => {
  const endpoints = listEndpoints(app);
  res.json(endpoints);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

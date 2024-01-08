const pool = require("../db/db_config");

exports.fetch_all_users = () => {
  const query = "SELECT * FROM todo.users";
  return pool.query(query);
};

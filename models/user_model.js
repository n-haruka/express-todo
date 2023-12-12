const pool = require("../db_config");

exports.fetch_all_users = () => {
  const query = "SELECT * FROM todo.users";
  return pool.query(query);
};

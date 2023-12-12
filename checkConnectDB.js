const pool = require("./db_config");

async function queryDatabase() {
  let client;
  try {
    // Connect to the database
    client = await pool.connect(); // Execute a query
    const result = await client.query("SELECT NOW()");
    console.log(result.rows);
  } catch (err) {
    console.error("Error executing query", err.stack);
  } finally {
    // Release the client back to the pool
    if (client) {
      client.release();
    }
  }
}
queryDatabase();

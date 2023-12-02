const { Pool } = require('pg');

const pool = new Pool({
    user: 'dev_user',          // Your database user
    host: 'localhost',         // Your database host
    database: 'development_db',// Your database name
    password: 'dev_password',  // Your database password
    port: 5432,                // Your database port
});

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    client.query('SELECT NOW()', (err, result) => {
        release();
        if (err) {
            return console.error('Error executing query', err.stack);
        }
        console.log(result.rows);
    });
});

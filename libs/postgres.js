const { Client } = require('pg');

async function getConnection() {
    const client = await new Client({
        host: 'localhost',
        port: 5433,
        user: 'root',
        password: 'vladi2026',
        database: 'my_store'
    });
    await client.connect();
    return client;
}

module.exports = getConnection;

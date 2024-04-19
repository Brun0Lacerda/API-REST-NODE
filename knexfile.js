module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '12345',
      database: 'bankslips'
    },
    migrations: {
      directory: './src/migrations'
    }
  }
};

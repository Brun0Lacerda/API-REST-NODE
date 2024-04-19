module.exports = {
  development: {
    client: 'mysql',
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

import knex from 'knex';

const connection = knex({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'a_educar'
  },
  useNullAsDefault: true,
});

export default connection;
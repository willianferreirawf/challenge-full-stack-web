import knex from 'knex';

const connection = knex({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'a_educar',
    password: 'root',
    database: 'root'
  },
  useNullAsDefault: true,
});

export default connection;
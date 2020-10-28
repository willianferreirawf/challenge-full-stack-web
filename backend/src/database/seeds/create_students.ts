import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { name: 'Willian Ferreira', email: 'williannfferreira@gmail.com', ra: '3215646', cpf: '11122233344' },
    { name: 'Nycole Marques Machado', email: 'nycole@gmail.com', ra: '64213', cpf: '44455566677' },
    { name: 'Maria Júlia Marques Machado Ferreira', email: 'maju@gmail.com', ra: '135456', cpf: '77788899911' },
  ]);
}
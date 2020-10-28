import { Request, Response } from 'express';
import Knex from '../database/connection';
import { Student } from '../models/Student';

class StudentController {
  async index(request: Request, response: Response) {
    const students: Student[] = await Knex('students');

    return response.json(students); 
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const student: Student = await Knex('students').where('id', id).first();

    if (!student) {
      return response.status(400).json({ message: 'Student not found.' });
    }

    return response.json(student);
  }

  async store(request: Request, response: Response) {
    const { name, email, ra, cpf } = request.body;

    const insertedIds: number[] = await Knex('students').insert({ name, email, ra, cpf });
    const id = insertedIds[0];

    const student: Student = await Knex('students').where('id', id).first();

    return response.json(student);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email } = request.body;

    await Knex('students').where('id', id).update({ name, email, updated_at: Knex.fn.now() });

    const student: Student = await Knex('students').where('id', id).first();

    return response.json(student);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    
    const student: Student = await Knex('students').where('id', id).first();

    if (!student) {
      return response.status(400).json({ message: 'Student not found.' });
    }

    await Knex('students').where('id', id).del()

    return response.json({'message': 'Student Deleted'})
  }
}

export default StudentController;

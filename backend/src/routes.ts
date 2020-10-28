import express from 'express';

import StudentController from './controllers/StudentController';

const studentController = new StudentController();

const routes = express.Router();

routes.get('/students', studentController.index);
routes.get('/students/:id', studentController.show);
routes.post('/students', studentController.store);
routes.put('/students/:id', studentController.update);
routes.delete('/students/:id', studentController.delete);

export default routes;
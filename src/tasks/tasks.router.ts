import { Router } from 'express';
import { createValidator } from './tasks.validator';
import { taskController } from './tasks.controller';
import { updateValidator } from './tasks.validator';

/*Fire the router function*/
export const tasksRouter: Router = Router();

// Create a default route.
tasksRouter.get('/tasks', taskController.getAll);

tasksRouter.post('/tasks', createValidator, taskController.create);

tasksRouter.put('/tasks', updateValidator, taskController.update);

import { Router } from 'express';
import teachersControllerFactory from './teachers.controller';
import teachersRepositoryFactory from './teachers.repository';
import teachersServiceFactory from './teachers.service';

const teachersRouter = Router();
const teachersRepository = teachersRepositoryFactory();
const teachersService = teachersServiceFactory(teachersRepository);
const teachersController = teachersControllerFactory(teachersService);

teachersRouter.get('/', teachersController.findAll);
teachersRouter.get('/:id', teachersController.findOne);
teachersRouter.post('/', teachersController.create);
teachersRouter.put('/:id', teachersController.update);
teachersRouter.delete('/:id', teachersController.delete);

export default teachersRouter;

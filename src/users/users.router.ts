import express from 'express';
import usersControllerFactory from './users.controller';
import usersRepositoryFactory from './users.repository';
import usersServiceFactory from './users.service';

export const usersRouter = express.Router();

const usersRepository = usersRepositoryFactory();
const usersService = usersServiceFactory(usersRepository);
const usersController = usersControllerFactory(usersService);

usersRouter.get('/', usersController.findAll);
usersRouter.get('/:id', usersController.findOne);
usersRouter.post('/', usersController.create);
usersRouter.put('/:id', usersController.update);
usersRouter.delete('/:id', usersController.delete);

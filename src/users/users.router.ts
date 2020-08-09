import { Router } from 'express';
import bCryptServiceFactory from '../auth/bcrypt.service';
import usersControllerFactory from './users.controller';
import usersRepositoryFactory from './users.repository';
import usersServiceFactory from './users.service';

export const usersRouter = Router();

const bCryptService = bCryptServiceFactory();
const usersRepository = usersRepositoryFactory(bCryptService);
const usersService = usersServiceFactory(usersRepository);
const usersController = usersControllerFactory(usersService);

usersRouter.get('/', usersController.findAll);
usersRouter.get('/:id', usersController.findOne);
usersRouter.post('/', usersController.create);
usersRouter.put('/:id', usersController.update);
usersRouter.delete('/:id', usersController.delete);

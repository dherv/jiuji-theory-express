import { Router } from 'express';
import clubsControllerFactory from './clubs.controller';
import clubsRepositoryFactory from './clubs.repository';
import clubsServiceFactory from './clubs.service';

const clubsRouter = Router();
const clubsRepository = clubsRepositoryFactory();
const clubsService = clubsServiceFactory(clubsRepository);
const clubsController = clubsControllerFactory(clubsService);

clubsRouter.get('/', clubsController.findAll);
clubsRouter.get('/:id', clubsController.findOne);
clubsRouter.post('/', clubsController.create);
clubsRouter.put('/:id', clubsController.update);
clubsRouter.delete('/:id', clubsController.delete);

export default clubsRouter;

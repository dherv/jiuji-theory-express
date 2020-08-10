import { Router } from 'express';
import guardsControllerFactory from './guards.controller';
import guardsRepositoryFactory from './guards.repository';
import guardsServiceFactory from './guards.service';

const guardsRouter = Router();
const guardsRepository = guardsRepositoryFactory();
const guardsService = guardsServiceFactory(guardsRepository);
const guardsController = guardsControllerFactory(guardsService);

guardsRouter.get('/', guardsController.findAll);
guardsRouter.get('/:id', guardsController.findOne);
guardsRouter.post('/', guardsController.create);
guardsRouter.put('/:id', guardsController.update);
guardsRouter.delete('/:id', guardsController.delete);

export default guardsRouter;

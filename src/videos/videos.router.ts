import { Router } from 'express';
import videosControllerFactory from './videos.controller';
import videosRepositoryFactory from './videos.repository';
import videosServiceFactory from './videos.service';

const videosRouter = Router();
const videosRepository = videosRepositoryFactory();
const videosService = videosServiceFactory(videosRepository);
const videosController = videosControllerFactory(videosService);

videosRouter.get('/', videosController.findAll);
videosRouter.get('/:id', videosController.findOne);
videosRouter.post('/', videosController.create);
videosRouter.put('/:id', videosController.update);
videosRouter.delete('/:id', videosController.delete);
videosRouter.post('/search', videosController.search);

export default videosRouter;

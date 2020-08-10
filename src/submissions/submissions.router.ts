import { Router } from 'express';
import submissionsControllerFactory from './submissions.controller';
import submissionsRepositoryFactory from './submissions.repository';
import submissionsServiceFactory from './submissions.service';

const submissionsRouter = Router();
const submissionsRepository = submissionsRepositoryFactory();
const submissionsService = submissionsServiceFactory(submissionsRepository);
const submissionsController = submissionsControllerFactory(submissionsService);

submissionsRouter.get('/', submissionsController.findAll);
submissionsRouter.get('/:id', submissionsController.findOne);
submissionsRouter.post('/', submissionsController.create);
submissionsRouter.put('/:id', submissionsController.update);
submissionsRouter.delete('/:id', submissionsController.delete);

export default submissionsRouter;

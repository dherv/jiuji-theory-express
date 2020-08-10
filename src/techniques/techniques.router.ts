import { Router } from 'express';
import techniquesControllerFactory from './techniques.controller';
import techniquesRepositoryFactory from './techniques.repository';
import techniquesServiceFactory from './techniques.service';

const techniquesRouter = Router();
const techniquesRepository = techniquesRepositoryFactory();
const techniquesService = techniquesServiceFactory(techniquesRepository);
const techniquesController = techniquesControllerFactory(techniquesService);

techniquesRouter.get('/', techniquesController.findAll);
techniquesRouter.get('/:id', techniquesController.findOne);
techniquesRouter.post('/', techniquesController.create);
techniquesRouter.put('/:id', techniquesController.update);
techniquesRouter.delete('/:id', techniquesController.delete);

export default techniquesRouter;

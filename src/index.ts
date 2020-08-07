import compression from 'compression';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import * as Sentry from '@sentry/node';
import loggerStream from '../config/winston';
import usersControllerFactory from './users/users.controller';
import usersRepositoryFactory from './users/users.repository';
import usersServiceFactory from './users/users.service';

const usersRepository = usersRepositoryFactory();
const usersService = usersServiceFactory(usersRepository);
const usersController = usersControllerFactory(usersService);

dotenv.config();
Sentry.init({
  dsn:
    'https://1f810cd5f8774fb1873e49e94bfb1693@o424697.ingest.sentry.io/5374643',
});
/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(compression());
app.use(morgan('combined', { stream: loggerStream }));

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

// API
app.get('/v1/users', usersController.findAll);
app.get('/v1/users/:id', usersController.findOne);
app.post('/v1/users', usersController.create);
app.put('/v1/users/:id', usersController.update);
app.delete('/v1/users/:id', usersController.delete);

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

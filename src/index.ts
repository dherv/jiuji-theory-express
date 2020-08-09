import compression from 'compression';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import * as Sentry from '@sentry/node';
import loggerStream from '../config/winston';
import { authRouter } from './auth/auth.router';
import passport from './auth/passport.strategies';
import { usersRouter } from './users/users.router';

dotenv.config();
Sentry.init({
  dsn: process.env.SENTRY_KEY,
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
// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(compression());
app.use(morgan('combined', { stream: loggerStream }));
app.use(passport.initialize());

// API
app.use('/v1/users', usersRouter);
app.use('/v1/auth', authRouter);

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

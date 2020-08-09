import { Router } from 'express';
import passport from 'passport';
import usersRepositoryFactory from '../users/users.repository';
import usersServiceFactory from '../users/users.service';
import authControllerFactory from './auth.controller';
import bCryptServiceFactory from './bcrypt.service';
import jwtService from './jwt.service';

const bCryptService = bCryptServiceFactory();
const usersRepository = usersRepositoryFactory(bCryptService);
const usersService = usersServiceFactory(usersRepository);
const authController = authControllerFactory(usersService, jwtService());

export const authRouter = Router();

authRouter.post('/login', authController.login);
authRouter.post('/register', authController.register);
authRouter.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      message: 'You made it to the secure route',
      user: req.user,
      token: req.query.secret_token,
    });
  }
);

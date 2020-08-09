import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import {
  IAuthController,
  IJWTService,
  IUserService,
} from '../../types/interfaces';

const authController = (
  usersService: IUserService,
  jwtService: IJWTService
): IAuthController => {
  return {
    register: async (req: Request, res: Response) => {
      try {
        const { body } = req;
        const user = await usersService.create(body);
        const token = await jwtService.sign({
          username: user.email,
          sub: user.id,
        });
        return res.json({ message: 'created', user, token });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    login: async (req: Request, res: Response, next: NextFunction) => {
      passport.authenticate('login', async (err, user) => {
        try {
          if (err || !user) {
            const error = new Error('An Error occurred');
            return next(error);
          }
          req.login(user, { session: false }, async (error) => {
            if (error) return next(error);
            const token = jwtService.sign({
              username: user.email,
              sub: user.id,
            });
            return res.json({ token });
          });
        } catch (error) {
          return next(error);
        }
      })(req, res, next);
    },
  };
};

export default authController;

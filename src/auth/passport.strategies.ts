import passport from 'passport';
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import { User } from '../users/types/users.types';
import usersRepositoryFactory from '../users/users.repository';
import usersServiceFactory from '../users/users.service';
import authServiceFactory from './auth.service';
import bCryptServiceFactory from './bcrypt.service';

const bCryptService = bCryptServiceFactory();
const usersRepository = usersRepositoryFactory(bCryptService);
const usersService = usersServiceFactory(usersRepository);
const authService = authServiceFactory(bCryptService);

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (
      email: string,
      password: string,
      done: (
        err?: Error | null,
        user?: User | boolean,
        message?: { message: string }
      ) => any
    ) => {
      try {
        const user = (await usersService.findOneByEmailWithPassword(
          email
        )) as User;
        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        const validate = await authService.validateUser(user, password);
        if (!validate) {
          return done(null, false, { message: 'Wrong Password' });
        }

        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRETORKEY as string,
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);

export default passport;

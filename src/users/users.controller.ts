import { Request, Response } from 'express';
import { IController, IService } from '../../types/interfaces';
import { User } from './types/users.types';

const usersControllers = (usersService: IService): IController => {
  return {
    findAll: async <User>(req: Request, res: Response) => {
      try {
        const users = await usersService.findAll();
        return res.json({ users });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    findOne: async (req: Request, res: Response) => {
      const {
        params: { id },
      } = req;
      try {
        const user = await usersService.findOne<User>(Number(id));
        return res.json({ user });
      } catch (error) {
        console.error(error);
        return error;
      }
    },
    create: async <User>(req: Request, res: Response) => {
      try {
        const { body } = req;
        const user = await usersService.create(body);
        return res.json({ message: 'created', user });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    update: async <User>(req: Request, res: Response) => {
      return await 'hey';
    },
    delete: async <User>(req: Request, res: Response) => {
      return await 'hey';
    },
  };
};

export default usersControllers;

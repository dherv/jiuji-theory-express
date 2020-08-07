import { NextFunction, Response } from 'express';
import { IController, IService } from '../../types/interfaces';
import { CreateUserDto } from './dto/users.dto';

const usersControllers = (usersService: IService): IController => {
  return {
    findAll: async () => {
      return await Promise.resolve('hey');
    },
    findOne: async (req, res, next) => {
      return await usersService.findOne(req.params.id);
    },
    create: async ({ body }: { body: CreateUserDto }, res: Response) => {
      try {
        const user = await usersService.create(body);
        return res.json({ message: 'created', user });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    update: async () => {
      return await 'hey';
    },
    delete: async () => {
      return await 'hey';
    },
  };
};

export default usersControllers;

import { Request, Response } from 'express';
import { IVideoController, IVideoService } from '../../types/interfaces';
import { ReqUser } from '../users/types/users.types';

const videosController = (videosService: IVideoService): IVideoController => {
  return {
    findAll: async (req: Request, res: Response) => {
      try {
        const videos = await videosService.findAll();
        return res.json({ videos });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    findOne: async (req: Request, res: Response) => {
      try {
        const {
          params: { id },
        } = req;
        const video = await videosService.findOne(Number(id));
        return res.json({ video });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    create: async (req: Request, res: Response) => {
      try {
        const { body, user } = req;
        const video = await videosService.create(body, user as ReqUser);
        return res.json({ message: 'created', video });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    update: async (req: Request, res: Response) => {
      try {
        const {
          body,
          params: { id },
          user,
        } = req;
        const video = await videosService.update(
          body,
          Number(id),
          user as ReqUser
        );
        return res.json({
          message: 'updated',
          video,
        });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    delete: async (req: Request, res: Response) => {
      try {
        const {
          params: { id },
        } = req;
        const video = await videosService.delete(Number(id));
        return res.json({ message: 'deleted', video });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    search: async (req: Request, res: Response) => {
      try {
        const { body } = req;
        const videos = await videosService.search(body);
        return res.json({ videos });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
  };
};

export default videosController;

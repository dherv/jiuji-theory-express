import { NextFunction, Request, Response } from 'express';
import { ReqUser } from '../src/users/types/users.types';
import {
  VideosSearchBodyDto,
  VideosSearchResultDto,
} from '../src/videos/dto/videos.dto';

export interface IController {
  findAll: (
    req: Request,
    res: Response,
    next?: NextFunction
  ) => Promise<Response<any[]>>;
  findOne: (
    req: Request,
    res: Response,
    next?: NextFunction
  ) => Promise<Response<any>>;
  create: (
    req: Request,
    res: Response,
    next?: NextFunction
  ) => Promise<Response<any>>;
  update: (
    req: Request,
    res: Response,
    next?: NextFunction
  ) => Promise<Response<Partial<any>>>;
  delete: (
    req: Request,
    res: Response,
    next?: NextFunction
  ) => Promise<Response<any>>;
}

export interface IService {
  findAll: () => Promise<any[]>;
  findOne: (id: number) => Promise<any>;
  create: (body: any, user: ReqUser) => Promise<any>;
  update: (body: any, id: number, user: ReqUser) => Promise<Partial<any>>;
  delete: (id: number) => Promise<void>;
}

export interface IRepository {
  findAll: () => Promise<any>;
  findOne: (id: number) => Promise<any>;
  create: (body: any, user: ReqUser) => Promise<any>;
  update: (body: any, id: number, user: ReqUser) => Promise<any>;
  delete: (id: number) => Promise<any>;
}

export interface IUserService extends IService {
  create: (body: any) => Promise<any>;
  update: (body: any, id: number) => Promise<Partial<any>>;
  findOneByEmailWithPassword: <T>(email: string) => Promise<T>;
}
export interface IUserRepository extends IRepository {
  create: (body: any) => Promise<any>;
  update: (body: any, id: number) => Promise<any>;
  findOneByEmailWithPassword: (email: string) => Promise<any>;
}
export interface IVideoService extends IService {
  search: (body: VideosSearchBodyDto) => Promise<VideosSearchResultDto[]>;
}
export interface IVideoController extends IController {
  search: (
    req: Request,
    res: Response,
    next?: NextFunction
  ) => Promise<Response<any>>;
}
export interface IBCryptService {
  hash: (password: string | undefined) => Promise<string>;
  compare: (password: string | undefined, hash: string) => Promise<boolean>;
}
export interface IJWTService {
  sign: ({ username, sub }: ReqUser) => Promise<any>;
}
export interface IAuthService {
  validateUser: (user: Express.User, pass: string) => Promise<any>;
}
export interface IAuthController {
  register: (req: Request, res: Response) => Promise<Response<any[]>>;
  login: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

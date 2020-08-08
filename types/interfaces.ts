import { NextFunction, Request, Response } from 'express';

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
  findAll: <T>() => Promise<T[]>;
  findOne: <T>(id: number) => Promise<T>;
  create: <B, T>(body: B) => Promise<T>;
  update: <B, T>(body: B, id: number) => Promise<Partial<T>>;
  delete: (id: number) => Promise<void>;
}

export interface IRepository {
  findAll: () => Promise<any>;
  findOne: (id: number) => Promise<any>;
  create: (body: any) => Promise<any>;
  update: (body: any, id: number) => Promise<any>;
  delete: (id: number) => Promise<any>;
}

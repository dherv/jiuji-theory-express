import { Belt } from '../types/users.types';

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  belt: Belt;
}

export interface UpdateUserDto {
  email: string;
  name: string;
  belt: Belt;
  club: { id: number };
}

import { Belt } from '../types/users.types';

export interface CreateUserDto {
  name: string;
  email: string;
  belt: Belt;
  club: { id: number };
  location: { id: number };
}

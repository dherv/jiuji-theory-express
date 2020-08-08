import { User_belt } from '@prisma/client';

export interface CreateUserDto {
  name: string;
  email: string;
  belt: User_belt;
  club: { id: number };
  location: { id: number };
}

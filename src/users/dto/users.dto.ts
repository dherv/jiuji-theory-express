export interface CreateUserDto {
  name: string;
  email: string;
  belt: string;
  club: { id: number };
  location: { id: number };
}

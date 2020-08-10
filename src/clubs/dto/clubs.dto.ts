export interface CreateClubDto {
  name: string;
  location: { id: number; name: string };
}

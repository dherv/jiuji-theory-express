export interface User {
  id: number;
  name: string | null;
  email: string;
  belt: Belt;
  locationId: number;
  clubId?: number;
}

export type Belt = 'WHITE' | 'BLUE' | 'PURPLE' | 'BROWN' | 'BLACK';

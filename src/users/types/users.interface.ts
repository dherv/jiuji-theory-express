export interface User {
  id: number;
  name: string | null;
  email: string;
  belt: Belt;
  locationId: number;
  clubId?: number;
}

enum Belt {
  WHITE,
  BLUE,
  PURPLE,
  BROWN,
  BLACK,
}

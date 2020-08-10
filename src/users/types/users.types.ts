export type User = {
  id: number;
  name: string;
  email: string;
  belt: Belt;
  club?: string;
  location?: string;
};

export type Belt = 'WHITE' | 'BLUE' | 'PURPLE' | 'BROWN' | 'BLACK';

export type ReqUser = {
  username: string;
  sub: number;
};

import bcrypt from 'bcrypt';
import { IBCryptService } from '../../types/interfaces';

const bCryptService = (): IBCryptService => {
  return {
    hash: async (password: string | undefined): Promise<string> => {
      return bcrypt.hash(password, 10);
    },

    compare: async (
      password: string | undefined,
      hash: string
    ): Promise<boolean> => {
      return bcrypt.compare(password, hash);
    },
  };
};

export default bCryptService;

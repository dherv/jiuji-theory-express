import { IAuthService, IBCryptService } from '../../types/interfaces';

const authService = (bCryptService: IBCryptService): IAuthService => {
  return {
    validateUser: async (user: any, pass: string): Promise<any> => {
      const validPassword = await bCryptService.compare(pass, user.password);
      if (validPassword) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    },
  };
};

export default authService;

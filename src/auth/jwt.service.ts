import jwt from 'jsonwebtoken';
import { IJWTService } from '../../types/interfaces';

const jwtService = (): IJWTService => {
  return {
    sign: ({ username, sub }): any => {
      const payload = {
        user: {
          username,
          sub,
        },
        iat: Date.now(),
      };

      const options = {
        expiresIn: '1d',
      };

      return jwt.sign(
        payload,
        process.env.JWT_SECRETORKEY as string,
        options as any
      );
    },
  };
};

export default jwtService;

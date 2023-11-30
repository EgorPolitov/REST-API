import jwt from 'jsonwebtoken';
import { jwt_secret } from '../config';

const createJWT = (user : any) => {
  const token : string = jwt.sign(user, jwt_secret);
  return token;
};

const isTokenValid = (token : string) => jwt.verify(token, jwt_secret);

// const attachCookiesToResponse = ({ res, user, refreshToken }) => {
//   const accessTokenJWT = createJWT({ payload: { user } });
//   const refreshTokenJWT = createJWT({ payload: { user, refreshToken } });

//   const oneDay = 1000 * 60 * 60 * 24;
//   const longerExp = 1000 * 60 * 60 * 24 * 30;

//   res.cookie('accessToken', accessTokenJWT, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     signed: true,
//     expires: new Date(Date.now() + oneDay),
//   });

//   res.cookie('refreshToken', refreshTokenJWT, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     signed: true,
//     expires: new Date(Date.now() + longerExp),
//   });
// };

export {
  createJWT,
  isTokenValid,
  // attachCookiesToResponse,
};

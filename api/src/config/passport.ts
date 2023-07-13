import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";

import { findUserByEmailService } from "../services/users";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload: any, done: any) => {
    const userEmail = payload.email;
    const foundUser = await findUserByEmailService(userEmail);
    done(null, foundUser);
  }
);

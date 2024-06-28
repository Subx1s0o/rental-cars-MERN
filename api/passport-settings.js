import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { UserModel } from "./DB/models/userModel.js";
import dotenv from "dotenv";

dotenv.config();

const userAuth = passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_KEY,
    },
    async (jwt_payload, done) => {
      try {
        const user = await UserModel.findById(jwt_payload.id);

        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

export default userAuth;

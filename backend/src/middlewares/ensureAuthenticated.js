import { AppError } from "../utils/AppError.js";
import authConfig from "../configs/auth.js";
import jsonwebtoken from "jsonwebtoken";
const { verify } = jsonwebtoken;

export async function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT Token not informed!", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret);

    req.user = {
      id: Number(user_id),
    };

    return next();
  } catch (error) {
    throw new AppError("Invalid JWT Token", 401);
  }
}

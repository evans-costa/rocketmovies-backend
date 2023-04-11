import knex from "../database/knex/index.js";
import authConfig from "../configs/auth.js";
import AppError from "../utils/AppError.js";

import jsonwebtoken from "jsonwebtoken";
import brcypt from "bcryptjs";
const { sign } = jsonwebtoken;
const { compare } = brcypt;

export class SessionsController {
  async create(req, res) {
    const { email, password } = req.body;

    const user = await knex("users").where({ email }).first();

    if (!user) {
      throw new AppError("E-mail and/or password not correct!", 401);
    }

    const passwordCompare = await compare(password, user.password);

    if (!passwordCompare) {
      throw new AppError("E-mail and/or password not correct!", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    return res.json({ user, token });
  }
}

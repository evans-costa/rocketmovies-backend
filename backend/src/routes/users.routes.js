import { Router } from "express";
import { UsersController } from "../controllers/UsersController.js";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated.js";

const usersController = new UsersController();
export const usersRouter = Router();

usersRouter.post("/", usersController.create);
usersRouter.put("/:id", ensureAuthenticated, usersController.update);

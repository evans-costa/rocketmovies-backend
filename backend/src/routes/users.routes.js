import { Router } from "express";

import { UsersController } from "../controllers/UsersController.js";

const usersController = new UsersController()
export const usersRouter = Router()

usersRouter.post("/", usersController.create)
usersRouter.put("/:id", usersController.update)
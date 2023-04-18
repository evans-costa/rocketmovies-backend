import multer from "multer";
import uploadConfig from "../configs/upload.js";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated.js";
import { UsersController } from "../controllers/UsersController.js";
import { UserAvatarController } from "../controllers/UserAvatarController.js";

const upload = multer(uploadConfig.MULTER);
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
export const usersRouter = Router();

usersRouter.post("/", usersController.create);
usersRouter.put("/", ensureAuthenticated, usersController.update);
usersRouter.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  userAvatarController.update
);

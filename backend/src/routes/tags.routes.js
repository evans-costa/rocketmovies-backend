import { Router } from "express";
import { MovieTagsController } from "../controllers/MovieTagsController.js";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated.js";

export const movieTagsRouter = Router();
const movieTagsController = new MovieTagsController();

movieTagsRouter.get(
  "/:user_id",
  ensureAuthenticated,
  movieTagsController.index
);

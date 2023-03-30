import { Router } from "express";
import { MovieTagsController } from "../controllers/MovieTagsController.js";

export const movieTagsRouter = Router()
const movieTagsController = new MovieTagsController()

movieTagsRouter.get("/:user_id", movieTagsController.index)
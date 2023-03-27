import { Router } from "express";
import { MovieTagsController } from "../controllers/MovieTagsController.js";

export const movieRouter = Router()
const movieTagsController = new MovieTagsController()

movieRouter.get("/:user_id", movieTagsController.index)
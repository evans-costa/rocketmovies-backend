import { Router } from "express";
import { MovieNotesController } from "../controllers/MovieNotesController.js";

export const movieNotesRouter = Router()
const movieNotesController = new MovieNotesController()

movieNotesRouter.get("/", movieNotesController.index)
movieNotesRouter.post("/:user_id", movieNotesController.create)
movieNotesRouter.get("/:id", movieNotesController.show)
movieNotesRouter.delete("/:id", movieNotesController.delete)
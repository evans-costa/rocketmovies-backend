import { Router } from "express";
import { usersRouter } from "./users.routes.js";
import { movieNotesRouter } from "./movies.routes.js";

export const router = Router()

router.use("/users", usersRouter)
router.use("/movie_notes", movieNotesRouter)
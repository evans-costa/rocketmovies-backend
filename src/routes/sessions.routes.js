import { Router } from "express";
import { SessionsController } from "../controllers/SessionsController.js";

export const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post("/", sessionsController.create);

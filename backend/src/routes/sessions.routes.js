import { Router } from "express";
import { SessionsController } from "../controllers/SessionsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

export const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.get("/", ensureAuthenticated, sessionsController.create);

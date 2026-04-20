import express from "express"
const authRouter = express.Router();
import * as authController from "../controllers/auth.controller.js"

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.register);
authRouter.post("/user-doubt", authController.register);
authRouter.post("/session", authController.register);

export default authRouter;
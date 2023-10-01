import express from "express";
import userController from "../controller/userController.js";
import logger from "../loaders/logger.js";

const userRouter = express.Router();

userRouter.get("/", userController.getAllUsers);
//userRouter.get("/user/:id", getUser);

userRouter.get("/test", (req, res) => {
  console.log("asjkldfjlkasdflasdfa");
});

export default userRouter;

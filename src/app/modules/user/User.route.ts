import express from "express";
import { UserControllers } from "./User.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./User.validation";

const router = express.Router();

router.get("/", UserControllers.getAllUser);
router.get("/:email", UserControllers.getAUser);
router.post(
  "/create-user",
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createUser
);

export const UserRoutes = router;

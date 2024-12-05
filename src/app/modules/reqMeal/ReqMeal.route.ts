import express from "express";
import { auth } from "../../middlewares/auth";
import { ReqMealControllers } from "./ReqMeal.controller";

const router = express.Router();

router.post("/:id", auth(["ADMIN", "USER"]), ReqMealControllers.requestMeal);
router.delete(
  "/:id/cancel",
  auth(["ADMIN", "USER"]),
  ReqMealControllers.cancelRequestMeal
);

export const ReqMealRoutes = router;

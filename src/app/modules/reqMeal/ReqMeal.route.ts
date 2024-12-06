import express from "express";
import { auth } from "../../middlewares/auth";
import { ReqMealControllers } from "./ReqMeal.controller";
import { badge } from "../../middlewares/badge";

const router = express.Router();

router.post(
  "/:id",
  auth(["ADMIN", "USER"]),
  badge(["silver", "gold", "platinum"]),
  ReqMealControllers.requestMeal
);

router.delete(
  "/:id/cancel",
  auth(["ADMIN", "USER"]),
  ReqMealControllers.cancelRequestMeal
);

router.patch("/:id/serve", auth(["ADMIN"]), ReqMealControllers.serveMeal);

export const ReqMealRoutes = router;

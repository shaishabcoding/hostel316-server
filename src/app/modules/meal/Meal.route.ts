import express from "express";
import { mealControllers } from "./Meal.controller";
import { auth } from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { mealValidation } from "./Meal.validation";

const router = express.Router();

router.get("/", mealControllers.getAllMeals);

router.post(
  "/create",
  auth(["ADMIN", "USER"]),
  validateRequest(mealValidation.mealValidationSchema),
  mealControllers.createMeal
);

router.patch(
  "/:id/review",
  auth(["ADMIN", "USER"]),
  validateRequest(mealValidation.reviewValidationSchema),
  mealControllers.giveReview
);

export const MealRoutes = router;

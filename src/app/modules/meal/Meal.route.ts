import express from "express";
import { mealControllers } from "./Meal.controller";
import { auth } from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { mealValidation } from "./Meal.validation";

const router = express.Router();

router.get("/", mealControllers.getAllMeals);

router.get("/:id", mealControllers.getSingleMeal);

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

router.patch(
  "/:id/edit",
  auth(["ADMIN", "USER"]),
  validateRequest(mealValidation.updateMealValidationSchema),
  mealControllers.updateMeal
);

router.patch(
  "/:id/like",
  auth(["ADMIN", "USER"]),
  mealControllers.toggleMealLike
);

router.delete(
  "/:id/delete",
  auth(["ADMIN", "USER"]),
  mealControllers.deleteMeal
);

export const MealRoutes = router;

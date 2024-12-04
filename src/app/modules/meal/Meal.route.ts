import express from "express";
import { mealControllers } from "./Meal.controller";

const router = express.Router();

router.get("/", mealControllers.getAllMeals);

export const MealRoutes = router;

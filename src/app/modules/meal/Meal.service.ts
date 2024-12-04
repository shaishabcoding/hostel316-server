import { Request } from "express";
import QueryBuilder, { QueryParams } from "../../builder/QueryBuilder";
import { mealSearchableFields } from "./Meal.constant";
import Meal from "./Meal.model";
import sendResponse from "../../utils/sendResponse";
import AppError from "../../errors/AppError";
import { StatusCodes } from "http-status-codes";

const getAllMealFromDB = async (query: QueryParams) => {
  const mealQuery = new QueryBuilder(Meal.find(), query)
    .search(mealSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await mealQuery.countTotal();
  const meals = await mealQuery.modelQuery.exec();

  return {
    meta,
    meals,
  };
};

const insertMealToDB = async (req: Request) => {
  const user = req.user._id;
  const mealData = { ...req.body, user };
  const meal = await Meal.create(mealData);
  return meal;
};

const giveReviewToMeal = async (req: Request) => {
  const { review } = req.body;
  const mealId = req.params.id;
  const userId = req.user._id;

  const meal = await Meal.findById(mealId);

  if (!meal) {
    throw new AppError(StatusCodes.NOT_FOUND, "Meal not found");
  }

  const existingReviewIndex = meal.reviews.findIndex(
    (r) => r.user.toString() === userId.toString()
  );

  existingReviewIndex !== -1
    ? (meal.reviews[existingReviewIndex].review = review)
    : meal.reviews.push({ user: userId, review });

  await meal.save();
};

export const mealServices = {
  getAllMealFromDB,
  insertMealToDB,
  giveReviewToMeal,
};

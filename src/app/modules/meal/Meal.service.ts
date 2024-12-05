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

const getSingleMealFromDB = async (req: Request) => {
  const mealId = req.params.id;
  const meal = await Meal.findById(mealId);
  return meal;
};

const insertMealToDB = async (req: Request) => {
  const user = req.user._id;
  const mealData = { ...req.body, user };
  const meal = await Meal.create(mealData);
  return meal;
};

const updateMealFromDB = async (req: Request) => {
  const mealId = req.params.id;
  const updateData = req.body;
  const userId = req.user._id;
  const userRole = req.user.role;

  const meal = await Meal.findById(mealId);

  if (!meal) {
    throw new AppError(StatusCodes.NOT_FOUND, "Meal not found");
  }

  if (userRole === "USER" && meal.user.toString() !== userId.toString()) {
    throw new AppError(
      StatusCodes.FORBIDDEN,
      "You are not authorized to update this meal"
    );
  }

  const updatedMeal = await Meal.findByIdAndUpdate(
    mealId,
    { $set: updateData },
    { new: true, runValidators: true }
  );

  return updatedMeal;
};

const deleteMealFromDB = async (req: Request) => {
  const mealId = req.params.id;
  const userId = req.user._id;
  const userRole = req.user.role;

  const meal = await Meal.findById(mealId);

  if (!meal) {
    throw new AppError(StatusCodes.NOT_FOUND, "Meal not found");
  }

  if (userRole === "USER" && meal.user.toString() !== userId.toString()) {
    throw new AppError(
      StatusCodes.FORBIDDEN,
      "You are not authorized to delete this meal"
    );
  }

  await Meal.findByIdAndDelete(mealId);

  return {
    message: "Meal deleted successfully",
  };
};

const giveReviewToMeal = async (req: Request) => {
  const { review, rating } = req.body;
  const mealId = req.params.id;
  const userId = req.user._id;

  const meal = await Meal.findById(mealId);

  if (!meal) {
    throw new AppError(StatusCodes.NOT_FOUND, "Meal not found");
  }

  const existingReviewIndex = meal.reviews.findIndex(
    (r) => r.user.toString() === userId.toString()
  );

  if (existingReviewIndex !== -1) {
    meal.reviews[existingReviewIndex].review = review;
    meal.reviews[existingReviewIndex].rating = rating;
  } else meal.reviews.push({ user: userId, review, rating });

  await meal.save();
};

export const mealServices = {
  getAllMealFromDB,
  getSingleMealFromDB,
  insertMealToDB,
  updateMealFromDB,
  deleteMealFromDB,
  giveReviewToMeal,
};

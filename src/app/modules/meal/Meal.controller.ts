import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { mealServices } from "./Meal.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const getAllMeals: RequestHandler = catchAsync(async (req, res) => {
  const data = await mealServices.getAllMealFromDB(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Meals are retrieved successfully!",
    data,
  });
});

const createMeal: RequestHandler = catchAsync(async (req, res) => {
  const data = await mealServices.insertMealToDB(req);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Meals has created successfully!",
    data,
  });
});

const updateMeal: RequestHandler = catchAsync(async (req, res) => {
  const data = await mealServices.updateMealFromDB(req);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Meal has updated successfully!",
    data,
  });
});

const deleteMeal: RequestHandler = catchAsync(async (req, res) => {
  const data = await mealServices.deleteMealFromDB(req);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Meal has deleted successfully!",
    data,
  });
});

const getSingleMeal: RequestHandler = catchAsync(async (req, res) => {
  const data = await mealServices.getSingleMealFromDB(req);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Meal is retrieved successfully!",
    data,
  });
});

const giveReview: RequestHandler = catchAsync(async (req, res) => {
  await mealServices.giveReviewToMeal(req);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Review update successfully!",
    data: {
      review: req.body.review,
      rating: req.body.rating,
    },
  });
});

const toggleMealLike: RequestHandler = catchAsync(async (req, res) => {
  const { message } = await mealServices.toggleMealLike(req);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message,
  });
});

export const mealControllers = {
  getAllMeals,
  getSingleMeal,
  createMeal,
  updateMeal,
  deleteMeal,
  giveReview,
  toggleMealLike,
};

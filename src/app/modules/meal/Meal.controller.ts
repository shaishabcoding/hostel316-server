import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { mealServices } from "./Meal.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const getAllMeals: RequestHandler = catchAsync(async (_req, res) => {
  const meals = await mealServices.getAllMealFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "User is retrieved successfully!",
    data: meals,
  });
});

export const mealControllers = {
  getAllMeals,
};

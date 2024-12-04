import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { mealServices } from "./Meal.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const getAllMeals: RequestHandler = catchAsync(async (req, res) => {
  const mealData = await mealServices.getAllMealFromDB(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Meals are retrieved successfully!",
    data: mealData,
  });
});

export const mealControllers = {
  getAllMeals,
};

import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { ReqMealServices } from "./ReqMeal.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const requestMeal: RequestHandler = catchAsync(async (req, res) => {
  const data = await ReqMealServices.requestMeal(req);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    data,
    message: "Meal has requested successfully!",
    success: true,
  });
});

const cancelRequestMeal: RequestHandler = catchAsync(async (req, res) => {
  await ReqMealServices.cancelRequestMeal(req);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Meal request canceled successfully.",
    success: true,
  });
});

export const ReqMealControllers = {
  requestMeal,
  cancelRequestMeal,
};

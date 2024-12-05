import { Request } from "express";
import ReqMeal from "./ReqMeal.model";
import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";

const requestMeal = async (req: Request) => {
  const user = req.user._id,
    meal = req.params.id;

  const existingRequest = await ReqMeal.findOne({ user, meal });

  if (existingRequest) {
    throw new AppError(
      StatusCodes.CONFLICT,
      "You have already requested this meal."
    );
  }

  const data = await ReqMeal.create({
    user,
    meal,
  });

  return data;
};

export const ReqMealServices = {
  requestMeal,
};

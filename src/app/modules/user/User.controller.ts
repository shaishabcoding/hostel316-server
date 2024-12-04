import { RequestHandler } from "express";
import { UserServices } from "./User.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { StatusCodes } from "http-status-codes";

const createUser: RequestHandler = catchAsync(async (req, res) => {
  const { body } = req;

  if (body.dateOfBirth) body.dateOfBirth = new Date(body.dateOfBirth);

  const result = await UserServices.createUserIntoDB(body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "User create successfully!",
    data: result,
  });
});

const getAllUser: RequestHandler = catchAsync(async (req, res) => {
  const users = await UserServices.getAllUserFromDB(req.query);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Users are retrieved successfully!",
    data: users,
  });
});

const getAUser: RequestHandler = catchAsync(async (req, res) => {
  const { email } = req.params;

  const users = await UserServices.getAUserFromDB(email);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "User is retrieved successfully!",
    data: users,
  });
});

export const UserControllers = {
  createUser,
  getAllUser,
  getAUser,
};

import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { PaymentServices } from "./Payment.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const createPaymentIntern: RequestHandler = catchAsync(async (req, res) => {
  const { badge } = req.body;

  const data = await PaymentServices.createPaymentIntern(10);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    data,
    message: "Payment intern has created successfully!",
    success: true,
  });
});
export const PaymentControllers = {
  createPaymentIntern,
};

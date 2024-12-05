import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { PaymentServices } from "./Payment.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { badgePrices } from "../user/User.constant";

const createPaymentIntern: RequestHandler = catchAsync(async (req, res) => {
  const { badge } = req.body;

  const price = badgePrices[badge];
  const { clientSecret } = await PaymentServices.createPaymentIntern(price);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    data: {
      price,
      clientSecret,
    },
    message: "Payment intern has created successfully!",
    success: true,
  });
});

const payment: RequestHandler = catchAsync(async (req, res) => {
  const data = await PaymentServices.payment(req);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    data,
    message: "Payment did successfully!",
    success: true,
  });
});
export const PaymentControllers = {
  createPaymentIntern,
  payment,
};

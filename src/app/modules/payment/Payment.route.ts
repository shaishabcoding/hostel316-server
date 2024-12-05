import express from "express";
import { auth } from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { paymentValidation } from "./Payment.validation";
import { PaymentControllers } from "./Payment.controller";

const router = express.Router();

router.post(
  "/intent",
  auth(["ADMIN", "USER"]),
  validateRequest(paymentValidation.intentValidationSchema),
  PaymentControllers.createPaymentIntern
);

router.post(
  "/",
  auth(["ADMIN", "USER"]),
  validateRequest(paymentValidation.paymentValidationSchema),
  PaymentControllers.payment
);

export const PaymentRoutes = router;

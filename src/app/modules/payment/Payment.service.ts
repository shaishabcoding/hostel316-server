import { Request } from "express";
import { stripe } from "./Payment.utils";
import Payment from "./Payment.model";

const createPaymentIntern = async (price: number) => {
  const { client_secret: clientSecret } = await stripe.paymentIntents.create({
    amount: price,
    currency: "usd",
    payment_method_types: ["card"],
  });

  return { clientSecret };
};

const payment = async (req: Request) => {
  const user = req.user._id;
  const { badge, paymentId } = req.body;

  const paymentData = {
    badge,
    paymentId,
    user,
  };

  const payment = await Payment.create(paymentData);
  return payment;
};

export const PaymentServices = {
  createPaymentIntern,
  payment,
};

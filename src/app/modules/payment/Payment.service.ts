import { stripe } from "./Payment.utils";

const createPaymentIntern = async (price: number) => {
  const { client_secret: clientSecret } = await stripe.paymentIntents.create({
    amount: price,
    currency: "usd",
    payment_method_types: ["card"],
  });

  return { clientSecret };
};

export const PaymentServices = {
  createPaymentIntern,
};

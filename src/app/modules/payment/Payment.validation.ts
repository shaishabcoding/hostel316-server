import { z } from "zod";
import { badgePrices, TBadge } from "../user/User.constant";
import { stripePaymentIdRegex } from "./Payment.constant";

const intentValidationSchema = z.object({
  body: z.object({
    badge: z.enum(Object.keys(badgePrices) as [TBadge, ...TBadge[]]),
  }),
});

const paymentValidationSchema = z.object({
  body: z.object({
    badge: z.enum(Object.keys(badgePrices) as [TBadge, ...TBadge[]]),
    paymentId: z
      .string()
      .min(27, "Payment ID must be at least 27 characters long")
      .max(27, "Payment ID must be at most 27 characters long")
      .regex(stripePaymentIdRegex, "Invalid Stripe Payment ID format"),
  }),
});

export const paymentValidation = {
  intentValidationSchema,
  paymentValidationSchema,
};

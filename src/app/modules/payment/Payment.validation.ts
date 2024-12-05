import { z } from "zod";
import { badgePrices, TBadge } from "../user/User.constant";

const badgeValidationSchema = z.object({
  body: z.object({
    badge: z.enum(Object.keys(badgePrices) as [TBadge, ...TBadge[]]),
  }),
});

export const paymentValidation = {
  badgeValidationSchema,
};

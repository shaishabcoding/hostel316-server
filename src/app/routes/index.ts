import express from "express";
import { UserRoutes } from "../modules/user/User.route";
import { AuthRoutes } from "../modules/auth/Auth.route";
import { MealRoutes } from "../modules/meal/Meal.route";
import { PaymentRoutes } from "../modules/payment/Payment.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/meal",
    route: MealRoutes,
  },
  {
    path: "/payment",
    route: PaymentRoutes,
  },
];

moduleRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;

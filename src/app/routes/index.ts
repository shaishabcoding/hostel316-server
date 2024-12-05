import express from "express";
import { UserRoutes } from "../modules/user/User.route";
import { AuthRoutes } from "../modules/auth/Auth.route";
import { MealRoutes } from "../modules/meal/Meal.route";
import { PaymentRoutes } from "../modules/payment/Payment.route";
import { ReqMealRoutes } from "../modules/reqMeal/ReqMeal.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
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
  {
    path: "/meal/req",
    route: ReqMealRoutes,
  },
];

moduleRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;

import express from "express";
import { UserRoutes } from "../modules/user/User.route";
import { AuthRoutes } from "../modules/auth/Auth.route";
import { MealRoutes } from "../modules/meal/Meal.route";

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
];

moduleRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;

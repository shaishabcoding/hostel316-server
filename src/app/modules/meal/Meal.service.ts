import { Request } from "express";
import QueryBuilder, { QueryParams } from "../../builder/QueryBuilder";
import { mealSearchableFields } from "./Meal.constant";
import Meal from "./Meal.model";

const getAllMealFromDB = async (query: QueryParams) => {
  const mealQuery = new QueryBuilder(Meal.find(), query)
    .search(mealSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await mealQuery.countTotal();
  const meals = await mealQuery.modelQuery.exec();

  return {
    meta,
    meals,
  };
};

const insertMealToDB = async (req: Request) => {
  const user = req.user._id;
  const mealData = { ...req.body, user };
  const meal = await Meal.create(mealData);
  return meal;
};

const;

export const mealServices = {
  getAllMealFromDB,
  insertMealToDB,
};

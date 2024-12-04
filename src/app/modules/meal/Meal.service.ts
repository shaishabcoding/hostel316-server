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

export const mealServices = {
  getAllMealFromDB,
};

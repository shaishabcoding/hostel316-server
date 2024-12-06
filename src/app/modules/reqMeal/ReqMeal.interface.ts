import { Types } from "mongoose";

export type TRequestedMealStatus = "Padding" | "Delivered";
export const ERequestedMealStatus = ["Padding", "Delivered"];

export type TRequestedMeal = {
  meal: Types.ObjectId;
  user: Types.ObjectId;
  status: TRequestedMealStatus;
};

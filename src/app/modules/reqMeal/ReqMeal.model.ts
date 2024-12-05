import { model, Schema } from "mongoose";
import { ERequestedMealStatus, TRequestedMeal } from "./ReqMeal.interface";

const RequestedMealSchema = new Schema<TRequestedMeal>(
  {
    meal: {
      type: Schema.Types.ObjectId,
      ref: "Meal",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ERequestedMealStatus,
      required: true,
      default: "Padding",
    },
  },
  {
    timestamps: true,
  }
);

const ReqMeal = model<TRequestedMeal>("ReqMeal", RequestedMealSchema);

export default ReqMeal;

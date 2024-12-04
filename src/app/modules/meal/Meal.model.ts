import { model, Schema } from "mongoose";
import { TMeal } from "./Meal.interface";

const mealSchema = new Schema<TMeal>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  image: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  ingredients: { type: String, required: true },
  price: { type: Number, required: true },
  time: {
    type: String,
    required: true,
    default: () => new Date().toISOString(),
  },
  reviews: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      review: { type: String, required: true },
      rating: {
        type: Number,
        required: true,
      },
    },
  ],
  description: { type: String, required: true },
  likes: [String],
});

const Meal = model<TMeal>("Meal", mealSchema);
export default Meal;

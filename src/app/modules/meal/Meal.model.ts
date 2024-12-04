import { model, Schema } from "mongoose";
import { TMeal } from "./Meal.interface";

const mealSchema = new Schema<TMeal>({
  email: { type: String, required: true },
  username: { type: String, required: true },
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
  likes: { type: Number, required: true },
  reviews: [
    {
      email: { type: String, required: true },
      review: { type: String, required: true },
    },
  ],
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  likedBy: [{ type: String, required: true }],
});

const Meal = model<TMeal>("Meal", mealSchema);
export default Meal;

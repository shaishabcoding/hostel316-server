import { z } from "zod";

const mealValidationSchema = z.object({
  body: z.object({
    image: z.string().url("Invalid URL"),
    title: z.string().min(1, "Title is required"),
    category: z.string().min(1, "Category is required"),
    ingredients: z.string().min(1, "Ingredients are required"),
    price: z.number().min(0, "Price must be a positive number"),
    description: z.string().min(1, "Description is required"),
  }),
});

const reviewValidationSchema = z.object({
  body: z.object({
    review: z.string().min(1, "Review is required"),
  }),
});

export const mealValidation = {
  mealValidationSchema,
  reviewValidationSchema,
};

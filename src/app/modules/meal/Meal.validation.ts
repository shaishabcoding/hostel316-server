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

const updateMealValidationSchema = z.object({
  body: z.object({
    image: z.string().url("Invalid URL").optional(),
    title: z.string().min(1, "Title is required").optional(),
    category: z.string().min(1, "Category is required").optional(),
    ingredients: z.string().min(1, "Ingredients are required").optional(),
    price: z.number().min(0, "Price must be a positive number").optional(),
    description: z.string().min(1, "Description is required").optional(),
  }),
});

const reviewValidationSchema = z.object({
  body: z.object({
    review: z.string().min(1, "Review is required"),
    rating: z
      .number()
      .min(0, "Rating must be at least 0")
      .max(5, "Rating must be at most 5"),
  }),
});

export const mealValidation = {
  mealValidationSchema,
  updateMealValidationSchema,
  reviewValidationSchema,
};

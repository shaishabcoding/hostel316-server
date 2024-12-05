import { Types } from "mongoose";

type TReview = {
  user: Types.ObjectId;
  review: string;
  rating: number;
};

export type TMeal = {
  user: Types.ObjectId;
  image: string;
  title: string;
  category: string;
  ingredients: string;
  price: number;
  time: string;
  reviews: TReview[];
  description: string;
  likesBy: Types.ObjectId[];
};

import { Types } from "mongoose";

type TReview = {
  user: Types.ObjectId;
  review: string;
};

export type TMeal = {
  user: Types.ObjectId;
  image: string;
  title: string;
  category: string;
  ingredients: string;
  price: number;
  time: string;
  likes: number;
  reviews: TReview[];
  description: string;
  rating: number;
  likedBy: string[];
};

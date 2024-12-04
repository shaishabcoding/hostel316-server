type TReview = {
  email: string;
  review: string;
};

export type TMeal = {
  email: string;
  username: string;
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

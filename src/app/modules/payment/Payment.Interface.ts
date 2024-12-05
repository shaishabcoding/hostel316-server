import { Types } from "mongoose";
import { TBadge } from "../user/User.constant";

export type TPayment = {
  _id: Types.ObjectId;
  user: Types.ObjectId;
  time: string;
  badge: TBadge;
  paymentId: string;
};

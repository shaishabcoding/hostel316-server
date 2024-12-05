import { model, Schema } from "mongoose";
import { TPayment } from "./Payment.Interface";
import { badgeEnums } from "../user/User.constant";

const PaymentSchema = new Schema<TPayment>({
  user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  time: {
    type: String,
    required: true,
    default: () => new Date().toISOString(),
  },
  badge: {
    type: String,
    required: true,
    enum: badgeEnums,
  },
  paymentId: { type: String, required: true, unique: true },
});

const Payment = model<TPayment>("Payment", PaymentSchema);

export default Payment;

/** @format */

import { Schema, model } from "mongoose";

const ReservationSchema = model(
  "Reservation",
  new Schema(
    {
      chargeboxId: {
        type: Schema.Types.ObjectId,
        ref: "Chargebox",
        required: false,
      },
      reservationDate: { type: Date, required: true },
      reservationTime: { type: String, required: true },
      isActiveReservation: { type: Boolean, default: false },
      isPeakTime: { type: Boolean, default: false },
    },
    { timestamps: true }
  )
);

export default ReservationSchema;

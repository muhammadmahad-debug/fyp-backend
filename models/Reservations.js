/** @format */

import { Schema, model } from "mongoose";

const ReservationSchema = model(
  'Reservation',
  new Schema(
    {
      chargeboxId: {
        type: Schema.Types.ObjectId,
        ref: 'Chargebox',
        required: false,
      },
      reservationDate: { type: Date, required: true },
      isActiveReservation: { type: Boolean, default: false },
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
      },
      company: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
      },
    },
    { timestamps: true }
  )
)

export default ReservationSchema;

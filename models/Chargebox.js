/** @format */

import { Schema, model } from "mongoose";

const ChargeboxSchema = model(
  "Chargebox",
  new Schema(
    {
      name: { type: String, required: true },
      ocpp: {
        chargeboxId: { type: String, required: true },
        registrationStatus: {
          value: { type: String, required: true },
          label: { type: String, required: true },
        },
        chargePointModel: { type: String, required: true },
        endpointAddress: { type: String, required: true },
      },
      address: {
        street: { type: String, required: true },
        houseNo: { type: String, required: true },
        zipcode: { type: String, required: true },
        country: {
          value: { type: String, required: true },
          label: { type: String, required: true },
        },
        state: {
          value: { type: String, required: true },
          label: { type: String, required: true },
        },
        city: {
          value: { type: String, required: true },
          label: { type: String, required: true },
        },
      },
      misc: {
        desc: { type: String, required: true },
        adminAddress: { type: String, required: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        notes: { type: String, required: true },
        isPeakTime: { type: Boolean, default: false },
        RateApplied: { type: String, required: true },
        EstimatedCost: { type: Number, required: true },
        EstimatedKWH: { type: Number, required: true },
        TimeReserved: { type: Number, required: true },
      },
    },
    {
      timestamps: true,
    }
  )
);

export default ChargeboxSchema;

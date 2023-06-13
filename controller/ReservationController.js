/** @format */

import Reservations from "../models/Reservations.js";
import User from "../models/User.js";
import HttpError from "../util/http-error.js";

export const getReservations = async (req, res, next) => {
  try {
    const reservations = await Reservations.find();
    res.status(200).json(reservations);
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

export const getReserve = async (req, res, next) => {
  try {
    const { id } = req.params;
    const reserve = await Reservations.findById(id); // Updated from Reserve to Reservations
    if (!reserve) {
      const err = new HttpError("Reserve not found", 404);
      next(err);
    }
    res.status(200).json(reserve);
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

export const addReserve = async (req, res, next) => {
  try {
    const { firebaseId, ...rest } = req.body;
    const user  = User.findOne({firebaseId })
    const reserve = new Reservations({...rest , userId :user._id }); // Updated from Reserve to Reservations
    const createdReserve = await reserve.save();
    res.status(200).json(createdReserve);
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

export const updateReserve = async (req, res, next) => {
  try {
    const { id } = req.params;
    const reserve = await Reservations.findById(id); // Updated from Reserve to Reservations
    if (!reserve) {
      const error = new HttpError("Reserve not found", 404);
      return next(error);
    }
    const oldReserve = req.body;

    const updatedReserve = await Reservations.findOneAndUpdate(
      { _id: id },
      oldReserve
    );
    res.status(200).json(updatedReserve);
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

export const deleteReserve = async (req, res, next) => {
  // Updated from deleteVendor to deleteReserve
  try {
    const { id } = req.params;
    const reserveExists = await Reservations.findById(id); // Updated from Reserve to Reservations
    if (!reserveExists) {
      const err = new HttpError("Reserve not found", 404);
      return next(err);
    }
    const reserve = await Reservations.deleteOne({ _id: id }); // Updated from Reserve to Reservations
    res.status(200).json(reserve);
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

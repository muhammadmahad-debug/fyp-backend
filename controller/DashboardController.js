import Chargebox from "../models/Chargebox.js";

export const getDashboarData = async (req, res, next) => {
  try {
    const chargeboxes = await Chargebox.count();
    res.status(200).json({ chargeboxes });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

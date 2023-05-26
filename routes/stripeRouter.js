/** @format */

import express from "express";
import {
 createPayment
} from "../controller/StripeController";

const router = express.Router();

router.post("/create-charge", createPayment);

export default router;

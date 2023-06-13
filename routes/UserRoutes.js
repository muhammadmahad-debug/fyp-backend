import express from "express";
import { getUsers, getUser, login , creatUser } from "../controller/UserController.js";
import { authenticate as auth } from "../Middleware/auth.js";

const router = express.Router();

router.get("/users", auth, getUsers);
router.get("/users/:id", auth, getUser);
router.post(
  '/signup',
  creatUser
);

router.post("/login", login);
export default router;

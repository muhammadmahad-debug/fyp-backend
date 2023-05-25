import express from "express";
import { getUsers, getUser, login } from "../controller/UserController.js";
import { authenticate as auth } from "../Middleware/auth.js";

const router = express.Router();

router.get("/users", auth, getUsers);
router.get("/users/:id", auth, getUser);
// router.post(
//   '/signup',
//   [
//     check('name')
//       .not()
//       .isEmpty(),
//     check('email')
//       .normalizeEmail() // Test@test.com => test@test.com
//       .isEmail(),
//     check('password').isLength({ min: 6 })
//   ],
//   usersController.signup
// );

router.post("/login", login);
export default router;

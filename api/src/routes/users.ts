import { Router } from "express";

import passport from "passport";
import {
  createUser,
  logInWithEmail,
  updateUserInfo,
  deleteUserById,
  getUserById,
} from "../controllers/users";
import adminCheck from "../middlewares/adminCheck";

const router = Router();

router.post("/", createUser);
router.post("/login", logInWithEmail);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  getUserById
);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateUserInfo
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  adminCheck,
  deleteUserById
);

export default router;

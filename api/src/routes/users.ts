import { Router } from "express";

import passport from "passport";
import {
  createUser,
  logInWithEmail,
  updateUserInfo,
  deleteUserById,
  getUserById,
} from "../controllers/users";

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
router.delete("/:id", deleteUserById);

export default router;

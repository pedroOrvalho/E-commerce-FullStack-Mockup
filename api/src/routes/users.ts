import { Router } from "express";

import passport from "passport";
import {
  createUser,
  logInWithEmail,
  updateUserInfo,
  deleteUserById,
} from "../controllers/users";

const router = Router();

router.post("/signIn", createUser);
router.post("/login", logInWithEmail);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateUserInfo
);
router.delete("/:id", deleteUserById);

export default router;

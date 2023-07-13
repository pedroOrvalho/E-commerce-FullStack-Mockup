import { Router } from "express";

import passport from "passport";
import {
  createUser,
  logInWithPassword,
  updateUserInfo,
  deleteUserById,
} from "../controllers/users";

const router = Router();

router.post("/", createUser);
router.post("/login", logInWithPassword);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateUserInfo
);
router.delete("/:id", deleteUserById);

export default router;

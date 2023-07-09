import { Router } from "express";

import {
  createUser,
  updateUserInfoById,
  deleteUserById,
} from "../controllers/users";

const router = Router();

router.post("/", createUser);
router.put("/:id", updateUserInfoById);
router.delete("/:id", deleteUserById);

export default router;

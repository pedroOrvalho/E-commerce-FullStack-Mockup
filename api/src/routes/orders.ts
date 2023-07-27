import { Router } from "express";
import passport from "passport";

import {
  createOrder,
  getOrderById,
  getOrdersByUserId,
} from "../controllers/orders";

const router = Router();

router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  createOrder
);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  getOrdersByUserId
);

router.get(
  "/detail/:id",
  passport.authenticate("jwt", { session: false }),
  getOrderById
);

export default router;

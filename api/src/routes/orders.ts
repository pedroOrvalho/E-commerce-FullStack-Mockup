import { Router } from "express";
import passport from "passport";

import { createOrder, getOrdersById } from "../controllers/orders";

const router = Router();

router.post("/:id", passport.authenticate("jwt", { session: false }), createOrder);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  getOrdersById
);

export default router;

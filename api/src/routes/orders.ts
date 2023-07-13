import { Router } from "express";
import passport from "passport"

import { createOrder } from "../controllers/orders";

const router = Router();

router.post("/", passport.authenticate("jwt", { session: false }), createOrder);

export default router;

import { Router } from "express";

import { getAllProducts } from "../controllers/products";

const router = Router();

router.get("/", getAllProducts);

export default router;

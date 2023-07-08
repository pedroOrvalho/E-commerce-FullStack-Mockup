import Express from "express";
import cors from "cors";

import productRouter from "./routes/product";

const app = Express();

app.use(Express.json());
app.use(cors());

app.use("/products", productRouter);

export default app;

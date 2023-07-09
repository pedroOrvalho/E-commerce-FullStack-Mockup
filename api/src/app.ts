import Express from "express";
import cors from "cors";

import productRouter from "./routes/product";
import userRouter from "./routes/user";

const app = Express();

app.use(Express.json());
app.use(cors());

app.use("/products", productRouter);
app.use("/users", userRouter);

export default app;

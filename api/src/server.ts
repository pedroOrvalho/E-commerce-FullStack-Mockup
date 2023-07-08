import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app";

dotenv.config();

const port = 4000;

mongoose.connect(process.env.MONGODB_URI as string).then(() => {
  app.listen(port, () => {
    console.log(`server is running at port ${port}`);
  });
});

import { Request, Response } from "express";

import { getAllProductsService } from "../services/product";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const productList = await getAllProductsService();
    res.status(200).json(productList);
  } catch (error) {
    console.log(error);
  }
};

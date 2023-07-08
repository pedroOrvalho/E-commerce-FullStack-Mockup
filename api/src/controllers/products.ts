import { Request, Response } from "express";

import {
  createProductService,
  getAllProductsService,
  getProductByIdService,
  updateProductByIdService,
  deleteProductByIdService,
} from "../services/product";
import Product from "../models/product";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = new Product({
      title: req.body.title,
      price: req.body.price,
    });
    const product = await createProductService(newProduct);
    res.status(200).json(product);
  } catch (error) {
    console.log(`Error: ${error}! Couldn't create product.`);
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const productList = await getAllProductsService();
    res.status(200).json(productList);
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const productId = req.params.id;
  try {
    const product = await getProductByIdService(productId);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

export const updateProductById = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const updatedInformation = req.body;
  try {
    const product = await updateProductByIdService(
      productId,
      updatedInformation
    );
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductById = async (req: Request, res: Response) => {
  const productId = req.params.id;
  try {
    await deleteProductByIdService(productId);
    res
      .status(200)
      .json(`Product with id ${productId} has been deleted`)
      .send();
  } catch (error) {
    res
      .status(500)
      .json({ error: `Could not delete product with id: ${productId}` });
  }
};

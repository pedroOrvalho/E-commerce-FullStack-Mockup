import { NextFunction, Request, Response } from "express";

import {
  createProductService,
  getAllProductsService,
  getProductByIdService,
  updateProductByIdService,
  deleteProductByIdService,
} from "../services/products";
import Product from "../models/product";

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newProduct = new Product({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    material: req.body.material,
    color: req.body.color,
    image: req.body.image,
  });
  try {
    const product = await createProductService(newProduct);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productList = await getAllProductsService();
    res.status(200).json(productList);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const productId = req.params.id;
  try {
    const product = await getProductByIdService(productId);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const updateProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const productId = req.params.id;
  const updatedInformation = req.body;
  try {
    const product = await updateProductByIdService(
      productId,
      updatedInformation
    );
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const deleteProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const productId = req.params.id;
  try {
    await deleteProductByIdService(productId);
    res
      .status(200)
      .json(`Product with id ${productId} has been deleted`)
      .send();
  } catch (error) {
    next(error);
  }
};

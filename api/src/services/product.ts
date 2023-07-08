import Product, { ProductDocument } from "../models/product";

export const getAllProductsService = async (): Promise<ProductDocument[] | undefined> => {
  try {
    return Product.find();
  } catch (error) {
    console.log(error);
  }
};

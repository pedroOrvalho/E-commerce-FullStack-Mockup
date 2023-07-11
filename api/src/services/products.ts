import Product, { ProductDocument } from "../models/product";
import { NotFoundError } from "../helpers/apiError";

export const createProductService = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return product.save();
};

export const getAllProductsService = async (): Promise<ProductDocument[]> => {
  return Product.find();
};

export const getProductByIdService = async (
  productId: string
): Promise<ProductDocument> => {
  const product = await Product.findById(productId);
  if (product) {
    return product;
  } else {
    throw new NotFoundError(`Could not find product with id: ${productId} `);
  }
};

export const updateProductByIdService = async (
  productId: string,
  updatedInfo: Partial<ProductDocument>
): Promise<ProductDocument> => {
  const product = await Product.findByIdAndUpdate(productId, updatedInfo, {
    new: true,
  });
  if (product) {
    return await product;
  } else {
    throw new NotFoundError(`Could not update product with id: ${productId} `);
  }
};

export const deleteProductByIdService = async (
  productId: string
): Promise<ProductDocument | undefined | null> => {
  const deletedProduct = await Product.findByIdAndDelete(productId);
  if (deletedProduct) {
    return deletedProduct;
  } else {
    throw new NotFoundError(`Could not delete product with id: ${productId} `);
  }
};

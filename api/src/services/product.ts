import Product, { ProductDocument } from "../models/product";

export const createProductService = async (
  product: ProductDocument
): Promise<ProductDocument | undefined> => {
  try {
    return product.save();
  } catch (error) {
    console.log(error);
  }
};

export const getAllProductsService = async (): Promise<ProductDocument[] | undefined> => {
  try {
    return Product.find();
  } catch (error) {
    console.log(error);
  }
};

export const getProductByIdService = async (
  productId: string
): Promise<ProductDocument | undefined | null> => {
  const product = await Product.findById(productId);
  try {
    if (product) {
      return product;
    } else {
      console.log(`Could not find product with id: ${productId} `);
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateProductByIdService = async (
  productId: string,
  updatedInformation: Partial<ProductDocument>
): Promise<ProductDocument | undefined> => {
  const product = await Product.findByIdAndUpdate(productId, updatedInformation, {
    new: true,
  });
  try {
    if (product) {
      return await product;
    } else {
      console.log(`Could not update product with id: ${productId}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductByIdService = async (
  productId: string
): Promise<ProductDocument | undefined | null> => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    return deletedProduct;
  } catch (error) {
    console.log(error);
  }
};

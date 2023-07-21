export type Product = {
  _id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  material: string[];
  color: string;
  image: string[];
};

export type Favorite = {
  _id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  material: string[];
  color: string;
  image: string[];
  quantity: number;
};

export type CartProduct = {
  _id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  material: string[];
  color: string;
  image: string[];
  quantity: number;
};

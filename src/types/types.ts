import { Item } from "reducers/ProductSlice";

export type CartItem = {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
  discount: number;
  maxPrice: number;
  sellerName: string;
};

export type OrderItem = {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
  discount: number;
  maxPrice: number;
  sellerName: string;
};

export type CartProps = {
  cartItems: CartItem[];
};

export type ProductProps = {
  item: Item | null;
};

export type CartItemProps = {
  cart: CartItem;
};
export type ActionItemProps = {
  item: Item | null;
};

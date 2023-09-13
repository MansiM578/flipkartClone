import { useEffect, useState } from "react";
import { CartItem, CartProps } from "types/types";

function useTotalView({ cartItems }: CartProps) {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cartItems.map((item: CartItem) => {
      price += item.maxPrice * item.quantity;
      discount += (item.maxPrice - item.price) * item.quantity;
    });
    setPrice(price);
    setDiscount(discount);
  };

  return { price, discount };
}

export default useTotalView;

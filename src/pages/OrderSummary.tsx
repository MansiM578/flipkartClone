// OrderSummary.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducers/Store";
import { CartItem } from "types/types";

const OrderSummary: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.orderItems);

  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {cartItems.map((item: CartItem) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default OrderSummary;

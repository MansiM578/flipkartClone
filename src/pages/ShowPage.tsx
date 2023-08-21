import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers/Store";
import {
  CartItem,
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
} from "reducers/CartSlice";
import { Button, styled } from "@mui/material";

const Image = styled("img")({
  padding: "15px",
});

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleDeleteFromCart = (itemId: string) => {
    dispatch(deleteFromCart(itemId));
  };

  const handleIncreaseQuantity = (itemId: string) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId: string) => {
    dispatch(decreaseQuantity(itemId));
  };

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item: CartItem) => (
          <div key={item.id}>
            <Image src={item.image} alt="image1" />
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>

            <Button
              variant="contained"
              onClick={() => handleIncreaseQuantity(item.id)}
            >
              +
            </Button>
            <Button
              variant="contained"
              onClick={() => handleDecreaseQuantity(item.id)}
            >
              -
            </Button>

            <Button
              variant="contained"
              onClick={() => handleDeleteFromCart(item.id)}
            >
              Delete
            </Button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
